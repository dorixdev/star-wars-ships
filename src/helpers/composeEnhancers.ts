import { compose } from 'redux';

export const composeEnhancers =
  (typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
