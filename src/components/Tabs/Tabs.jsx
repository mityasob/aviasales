import React from "react";
import { connect } from "react-redux";
import { selectTab } from "../../redux/actions";

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
    tabArray: state.filterReducer.tabArray,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectTab: (event) => dispatch(selectTab(event.target.innerText))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
