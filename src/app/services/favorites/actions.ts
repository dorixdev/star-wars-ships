import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import { fetchWithToken } from '../../../helpers/fetchData';
import { RootState } from '../../config/store';
import { FAV_ADD_NEW, FAV_LOADED, FAV_REMOVE, FAV_CLEAR } from './types';

export const favStartAddNew = (starship: Starship) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const favorite: FavoriteStarship = {
      name: starship.name,
      starshipID: starship.id,
    };
    try {
      const res = await fetchWithToken('favorites', favorite, 'POST');
      const body = await res.json();
      if (body.ok) {
        const compFavorite: FavoriteStarship = {
          id: body.data.id,
          name: body.data.name,
          starshipID: body.data.starshipID,
        };
        dispatch(favAddNew(compFavorite));
        Swal.fire({
          title: 'Success',
          text: 'Added to favorites!',
          icon: 'success',
        });
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

export const favStartRemove = (starship: Starship) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetchWithToken(
        `favorites/${starship.name}`,
        {},
        'DELETE'
      );
      const body = await res.json();
      if (body.ok) {
        dispatch(favRemove(starship.id));
        Swal.fire({
          title: 'Success',
          text: 'Removed from favorites!',
          icon: 'success',
        });
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
