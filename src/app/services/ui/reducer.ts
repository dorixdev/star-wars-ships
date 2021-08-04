import { UI_LOADING_END, UI_LOADING_START, UI_SEARCH_START } from './types';

const initialState = {
  isLoading: true,
  search: '',
};

export const uiReducer = (state = initialState, action: ActionReducer) => {
  switch (action.type) {
    case UI_LOADING_START:
      return {
        ...state,
        isLoading: action.payload,
      };
    case UI_LOADING_END:
      return {
        ...state,
        isLoading: false,
      };
    case UI_SEARCH_START:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
