import { UI_LOADING_END, UI_LOADING_START, UI_SEARCH_START } from './types';

export const loadingStart = () => ({
  type: UI_LOADING_START,
  payload: true,
});

export const loadingEnd = () => ({
  type: UI_LOADING_END,
  payload: false,
});

export const searchStart = (search: string) => ({
  type: UI_SEARCH_START,
  payload: search,
});
