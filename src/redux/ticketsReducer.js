import { TICKETS_LOAD } from './types';

const initialState = {
  posts: null,
  tickets: [],
};

export const ticketsReducer = (state = initialState, action) => {
  let ticketArray = [];
  switch (action.type) {
    case TICKETS_LOAD:
      if (state.tickets && action.data) {
        ticketArray = [...state.tickets, ...action.data.tickets];
        return { ...state, posts: action.data, tickets: ticketArray };
      }
      return { ...state, posts: action.data };

    default:
      return state;
  }
};
