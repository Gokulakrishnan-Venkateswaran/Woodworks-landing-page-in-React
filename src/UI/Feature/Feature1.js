import React from "react";

import classes from "./Feature1.module.css";

const Feature1 = ({ ind, title, text }) => {
  return (
    <div className={classes.feature1}>
      <h1>{ind}</h1>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Feature1;
