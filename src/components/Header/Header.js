import React from "react";

import classes from "./Header.module.css";
import Interior from "../../Assets/08Sofa.jpg";
import Blurbox from "../../UI/Blurbox/Blurbox";

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.blurbox}>
        <Blurbox>
          <h1>We Help You Make Modern Interior</h1>
          <p>
            We will help you to make an elegant and luxurious interior designed
            by professional interior designer.
          </p>
        </Blurbox>
      </div>
      <div className={classes.image}>
        <img src={Interior} alt="Interior image" />
      </div>
    </div>
  );
};

export default Header;
