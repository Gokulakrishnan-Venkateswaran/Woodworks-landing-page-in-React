import React from "react";

import classes from "./button.module.css";

function Button(props) {
  return (
    <>
      <a className={`${classes.btn} ${props.className}`}>{props.children}</a>
    </>
  );
}

export default Button;
