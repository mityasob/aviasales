import React from "react";

import classes from "./MoreButton.module.scss";

const MoreButton = () => {
  return (
    <button type="button" className={classes['more-button']}>Показать еще 5 билетов!</button>
  );
};

export default MoreButton;
