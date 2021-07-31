import { UI_LOADING_END, UI_LOADING_START } from './types';

export const loadingStart = () => ({
  type: UI_LOADING_START,
  payload: true,
});

export const loadingEnd = () => ({
  type: UI_LOADING_END,
  payload: false,
});
