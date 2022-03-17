import React from "react";

import classes from "./Brands.module.css";
import {
  Microsoft,
  Fortune,
  Business,
  Entrepreneur,
  Mashable,
} from "./imports";

const Brands = () => {
  return (
    <div className={classes.brand_container}>
      <h3>TRUSTED BY OVER 1K+ COMPANIES</h3>
      <div className={classes.brands}>
        <div>
          <img src={Microsoft} alt="Microsoft" />
        </div>
        <div>
          <img src={Fortune} alt="Fortune" />
        </div>
        <div>
          <img src={Business} alt="Business" />
        </div>
        <div>
          <img src={Entrepreneur} alt="Entrepreneur" />
        </div>
        <div>
          <img src={Mashable} alt="Mashable" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
