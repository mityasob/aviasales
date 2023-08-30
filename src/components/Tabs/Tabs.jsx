import React from "react";
import { connect } from "react-redux";

import classes from "./Tabs.module.scss";

const Tabs = ({ tabArray, onSelectTab }) => {
  const tabList = tabArray.map((element, i) => {
    return (
      <li
        key={tabArray[i].index} className={classes[tabArray[i].isSelected ? "selected" : ""]}
        onClick={onSelectTab}
      >
        <span className={classes["tab-title"]}>{tabArray[i].name}</span>
      </li>
    );
  });

  return <ul className={classes.tabs}>{tabList}</ul>;
};

function mapStateToProps(state) {
  return {
    tabArray: state.tabArray,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectTab: (event) => {
      const action = { type: "SELECT_TAB", innerText: event.target.innerText };
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
