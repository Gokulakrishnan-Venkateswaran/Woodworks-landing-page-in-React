import React from "react";

import classes from "./Blurbox.module.css";

const Blurbox = (props) => {
  return (
    <div className={`${classes.blur} ${props.className}`}>{props.children}</div>
  );
};

export default Blurbox;
