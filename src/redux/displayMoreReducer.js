import { DISPLAY_MORE } from './types';

const initialState = {
  displayStackSize: 5,
};

export const displayMoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MORE:
      console.log(state);
      return Object.assign({}, state, {
        displayStackSize: state.displayStackSize + 5,
      });
    default:
      return state;
  }
};
