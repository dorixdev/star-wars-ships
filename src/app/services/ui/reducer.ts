import { UI_LOADING_END, UI_LOADING_START } from './types';

const initialState = {
  isLoading: true,
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
    default:
      return state;
  }
};
