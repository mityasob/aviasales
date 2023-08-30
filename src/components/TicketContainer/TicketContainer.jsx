import React from "react";

import classes from "./TicketContainer.module.scss";
import Tabs from '../Tabs';
import TicketList from '../TicketList';
import MoreButton from '../MoreButton';

const TicketContainer = (props) => {
  return (
    <div className={classes['ticket-container']}>
      <Tabs store={props.store} />
      <TicketList />
      <MoreButton />
    </div>
  );
};

export default TicketContainer;
