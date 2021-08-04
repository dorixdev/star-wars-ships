import { combineReducers } from 'redux';
import { authReducer } from '../services/auth/reducer';
import { FavoritesReducer } from '../services/favorites/reducer';
import { uiReducer } from '../services/ui/reducer';

export const rootReducer = combineReducers({
  // Add reducers here
  ui: uiReducer,
  auth: authReducer,
  favorites: FavoritesReducer,
});
