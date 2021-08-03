import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import { fetchWithToken } from '../../../helpers/fetchData';
import { RootState } from '../../config/store';
import { FAV_ADD_NEW, FAV_LOADED, FAV_REMOVE, FAV_CLEAR } from './types';

export const favStartAddNew = (favorite: FavoriteStarship) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { uid, name } = getState().auth;
    try {
      const res = await fetchWithToken('favorites', favorite, 'POST');
      const body = await res.json();
      if (body.ok) {
        const compFavorite = {
          id: body.data.id,
          name,
          uid,
        };
        dispatch(favAddNew(compFavorite));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const favAddNew = (favorite: FavoriteStarship) => ({
  type: FAV_ADD_NEW,
  payload: favorite,
});

export const favStartRemove = () => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { uid } = getState().auth;
    try {
      const res = await fetchWithToken(`favorites/${uid}`, {}, 'DELETE');
      const body = await res.json();
      if (body.ok) {
        dispatch(favRemove(uid));
      } else {
        Swal.fire({
          title: 'Error',
          text: body.error,
          icon: 'error',
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const favRemove = (id: string) => ({
  type: FAV_REMOVE,
  payload: id,
});

export const favStartLoading = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetchWithToken('favorites');
      const body = await res.json();
      dispatch(favLoaded(body.data));
    } catch (err) {
      console.log(err);
    }
  };
};

const favLoaded = (favorites: FavoriteStarship) => ({
  type: FAV_LOADED,
  payload: favorites,
});

export const favClear = () => ({
  type: FAV_CLEAR,
});
