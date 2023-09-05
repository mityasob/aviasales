import React from "react";
import { connect } from 'react-redux';
import { displayMore } from "../../redux/actions";

import classes from "./MoreButton.module.scss";

const MoreButton = ({displayStackSize, onDisplayMore}) => {
  return (
    <button type="button" className={classes['more-button']} onClick={onDisplayMore}>Показать еще 5 билетов!</button>
  );
};

function mapStateToProps(state) {
  return {
    displayStackSize: state.displayStackSize,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDisplayMore: () => dispatch(displayMore()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoreButton);
