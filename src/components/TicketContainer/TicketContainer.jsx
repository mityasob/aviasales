import React from "react";

import classes from "./TicketContainer.module.scss";
import Tabs from '../Tabs';
import TicketList from '../TicketList';
import MoreButton from '../MoreButton';

const TicketContainer = () => {
  return (
    <div className={classes['ticket-container']}>
      <Tabs />
      <TicketList />
      <MoreButton />
    </div>
  );
};

export default TicketContainer;
