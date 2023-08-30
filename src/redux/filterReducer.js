import { SELECT_TAB, SELECT_FILTER } from './types';

const initialState = {
  tabArray: [
    { index: 0, name: 'Самый дешевый', isSelected: true },
    { index: 1, name: 'Самый быстрый', isSelected: false },
    { index: 2, name: 'Оптимальный', isSelected: false },
  ],
  filterArray: [
    { index: 0, name: 'Все', id: 'all', isChecked: true },
    { index: 1, name: 'Без пересадок', id: 'no-transfer', isChecked: true },
    { index: 2, name: '1 пересадка', id: 'one-transfers', isChecked: true },
    { index: 3, name: '2 пересадки', id: 'two-transfers', isChecked: true },
    { index: 4, name: '3 пересадки', id: 'three-transfers', isChecked: true },
  ],
};

export const filterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SELECT_TAB:
      const newTabArray = [];
      state.tabArray.forEach((element) => {
        if (action.innerText === element.name.toUpperCase()) {
          newTabArray.push({ ...element, isSelected: true });
        } else {
          newTabArray.push({ ...element, isSelected: false });
        }
      });
      return { ...state, tabArray: newTabArray };
    case SELECT_FILTER:
      const newFilterArray = [];
      state.filterArray.forEach((element) => {
        if (action.inputId === 'all') {
          newFilterArray.push({ ...element, isChecked: action.isChecked });
        } else if (action.inputId === element.id) {
          newFilterArray.push({ ...element, isChecked: !element.isChecked });
        } else {
          newFilterArray.push({ ...element });
        }
      });
      if (
        action.inputId !== 'all' &&
        newFilterArray[0].isChecked &&
        !action.isChecked
      ) {
        newFilterArray[0].isChecked = false;
      }
      if (
        action.inputId !== 'all' &&
        !newFilterArray[0].isChecked &&
        action.isChecked
      ) {
        const findUncheckedFilter = newFilterArray.find(
          (item) => item.id !== 'all' && item.isChecked === false
        );
        console.log(newFilterArray);
        console.log(findUncheckedFilter);
        if (!findUncheckedFilter) {
          newFilterArray[0].isChecked = true;
        }
      }
      return { ...state, filterArray: newFilterArray };
    default:
      return state;
  }
};
