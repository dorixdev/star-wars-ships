import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeEnhancers } from '../../helpers/composeEnhancers';
import { rootReducer } from './rootReducer';

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
