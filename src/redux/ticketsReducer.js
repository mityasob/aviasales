import { TICKETS_LOAD } from './types';

const initialState = {
  posts: null,
  tickets: [],
};

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TICKETS_LOAD:
      let ticketArray = [];
      if (state.tickets && action.data) {
        ticketArray = [...state.tickets, ...action.data.tickets];
        return Object.assign({}, state, {
          posts: action.data,
          tickets: ticketArray,
        });
      } else {
        return Object.assign({}, state, {
          posts: action.data,
        });
      }
    default:
      return state;
  }
};
