import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import { fetchWithoutToken, fetchWithToken } from '../../../helpers/fetchData';
import { AUTH_CHECKING_FINISHED, AUTH_LOGIN, AUTH_LOGOUT } from './types';

export const startLogin = ({ email, password }: FetchData) => {
  return async (dispatch: Dispatch) => {
    const response = await fetchWithoutToken(
      'auth/login',
      {
        email,
        password,
      },
      'POST'
    );

    const body = await response.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime().toString());
      dispatch(login({ uid: body.uid, name: body.name }));
    } else {
      Swal.fire('Error', body.msg || 'Rellene los campos', 'error');
    }
  };
};

export const startRegister = ({ email, password, name }: FetchData) => {
  return async (dispatch: Dispatch) => {
    const response = await fetchWithoutToken(
      'auth/register',
      {
        email,
        password,
        name,
      },
      'POST'
    );
    const body = await response.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime().toString());
      dispatch(login({ uid: body.uid, name: body.name }));
    } else {
      Swal.fire('Error', body.msg || 'Rellene los campos', 'error');
    }
  };
};

export const startCheking = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetchWithToken('auth/renew');
      const body = await response.json();

      if (body.ok) {
        localStorage.setItem('token', body.token);
        localStorage.setItem(
          'token-init-date',
          new Date().getTime().toString()
        );
        dispatch(login({ uid: body.uid, name: body.name }));
      } else {
        dispatch(checkingFinish());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const checkingFinish = () => ({
  type: AUTH_CHECKING_FINISHED,
});

const login = (user: { uid: string; name: string }) => ({
  type: AUTH_LOGIN,
  payload: user,
});

export const startLogout = () => {
  return (dispatch: Dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('token-init-date');
    dispatch(logout());
  };
};

const logout = () => ({
  type: AUTH_LOGOUT,
});
