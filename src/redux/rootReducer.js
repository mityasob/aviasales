import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { searchReducer } from './searchReducer';
import { ticketsReducer } from './ticketsReducer';
import { displayMoreReducer } from './displayMoreReducer';

export const rootReducer = combineReducers({
  filterReducer,
  searchId: searchReducer,
  posts: ticketsReducer,
  displayStackSize: displayMoreReducer,
});
