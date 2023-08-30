import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
  tabArray: filterReducer.tabArray,
  filterArray: filterReducer.filterArray,
});
