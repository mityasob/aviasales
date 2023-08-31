import React from "react";

import classes from "./App.module.scss";
import Main from "../Main"
import image from "../../assets/images/Logo.png";

const App = () => {
  return (
    <div className={classes.container}>
      <div className={classes["logo-container"]}>
        <img src={image} alt='Aviasales Logo' />
      </div>
      <Main />
    </div>
  );
};

export default App;
