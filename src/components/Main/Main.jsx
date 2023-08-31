import React from "react";

import classes from "./Main.module.scss";
import Filter from "../Filter/Filter";
import TicketContainer from "../TicketContainer/TicketContainer";


const Main = () => {
  return (
    <div className={classes.main}>
      <Filter />
      <TicketContainer />
    </div>
  );
};

export default Main;