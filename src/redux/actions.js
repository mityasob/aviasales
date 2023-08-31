import { SELECT_TAB, SELECT_FILTER } from './types';

export function selectTab(innerText) {
  return {
    type: SELECT_TAB,
    innerText,
  };
}

export function selectFilter(inputId, isChecked) {
  return {
    type: SELECT_FILTER,
    inputId,
    isChecked,
  };
}
