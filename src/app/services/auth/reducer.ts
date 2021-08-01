import { AUTH_CHECKING_FINISHED, AUTH_LOGIN, AUTH_LOGOUT } from './types';

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action?: ActionReducer) => {
  switch (action?.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };
    case AUTH_CHECKING_FINISHED:
      return {
        ...state,
        checking: false,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        checking: false,
      };
    default:
      return state;
  }
};
