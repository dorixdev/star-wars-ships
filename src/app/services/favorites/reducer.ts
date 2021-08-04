import { FAV_ADD_NEW, FAV_CLEAR, FAV_LOADED, FAV_REMOVE } from './types';

const initialState: { starships: Starship[] } = {
  starships: [],
};

export const FavoritesReducer = (
  state = initialState,
  action: ActionReducer
) => {
  switch (action.type) {
    case FAV_ADD_NEW:
      return {
        ...state,
        starships: [...state.starships, action.payload],
      };
    case FAV_LOADED:
      return {
        ...state,
        starships: action.payload,
      };
    case FAV_REMOVE:
      return {
        ...state,
        starships: state.starships.filter(
          (starship: FavoriteStarship) => starship.starshipID !== action.payload
        ),
      };
    case FAV_CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
