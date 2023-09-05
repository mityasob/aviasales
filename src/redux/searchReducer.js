import { GET_SEARCH_ID } from './types';

const initialState = {
  searchId: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_ID:
      return Object.assign({}, state, {
        searchId: action.data,
      });
    default:
      return state;
  }
};
