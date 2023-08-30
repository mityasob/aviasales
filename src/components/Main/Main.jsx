import React from "react";

import classes from "./Main.module.scss";
import Filter from "../Filter/Filter";
import TicketContainer from "../TicketContainer/TicketContainer";


const Main = (props) => {
  return (
    <div className={classes.main}>
      <Filter store={props.store} />
      <TicketContainer store={props.store} />
    </div>
  );
};

export default Main;