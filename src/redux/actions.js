import { SELECT_TAB, SELECT_FILTER, GET_SEARCH_ID, TICKETS_LOAD, DISPLAY_MORE } from './types';

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

export function getSearchId() {
  return function (dispatch) {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: GET_SEARCH_ID,
          data: res.searchId,
        });
      });
  };
}

export function ticketsLoad(searchId) {
  return function (dispatch) {
    fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        dispatch({
          type: TICKETS_LOAD,
          data: res,
        });
      });
  };
}

export function displayMore() {
  return {
    type: DISPLAY_MORE,
  };
}
