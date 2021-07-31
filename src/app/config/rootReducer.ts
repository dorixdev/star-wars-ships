import { combineReducers } from 'redux';
import { uiReducer } from '../services/ui/reducer';

export const rootReducer = combineReducers({
  // Add reducers here
  ui: uiReducer,
});
