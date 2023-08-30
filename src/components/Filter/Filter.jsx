import React from "react";
import { connect } from "react-redux";

import classes from "./Filter.module.scss";

const Filter = ({ filterArray, onSelectFilter }) => {
  const filterList = filterArray.map((element, i) => {
    return (
      <li>
        <input key={filterArray[i].index} onChange={onSelectFilter} type='checkbox' id={filterArray[i].id} name={filterArray[i].id} checked={filterArray[i].isChecked} />
        <label for={filterArray[i].id}>{filterArray[i].name}</label>
      </li>
    );
  });

  return (
    <div className={classes.filter}>
      <h2 className={classes.title}>Количество пересадок</h2>
      <ul className={classes["filter-list"]}>
        {filterList}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    filterArray: state.filterArray,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectFilter: (event) => {
      const action = { type: "SELECT_FILTER", inputId: event.target.id, isChecked: event.target.checked };
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
