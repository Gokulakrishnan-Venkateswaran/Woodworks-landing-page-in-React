import React from "react";
import Feature1 from "../../UI/Feature/Feature1";

import classes from "./About.module.css";
import { _01, _02, _03, _04 } from "./import";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.about_container1}>
        <div className={classes.about_define}>
          <h1>About Us</h1>
          <p>
            At Besnik Consultancy, we take pride in our values - service,
            integrity, and excellence.{" "}
          </p>
        </div>
        <a href="#" className={classes.btn}>
          Learn More
        </a>
      </div>
      <div className={classes.about_container2}>
        <div className={classes.about_details}>
          <div>
            <Feature1
              ind="1."
              title="Who We Are"
              text="You get a 2-week free trial to kick the Smarty tries. We want you to."
            />
            <Feature1
              ind="2."
              title="What Do We Do"
              text="We give you a free course that guides you through the process."
            />
          </div>
          <div>
            <Feature1
              ind="3."
              title="How Do We Help"
              text="Use our multimedia lecturers, videos, and coaching sessions."
            />
            <Feature1
              ind="4."
              title="Create success story"
              text="With access to online learning resources anyone can transfrm."
            />
          </div>
        </div>
        <div className={classes.gallery} id="gallery">
          <div className={classes.row}>
            <div className={classes.column}>
              <div className={classes.top_empty}></div>
              <img src={_01} alt="drawer image" />
              <img src={_02} alt="chair image" />
            </div>
            <div className={classes.column}>
              <img src={_03} alt="chair image" />
              <img src={_04} alt="sofa image" />
              <div className={classes.bottom_empty}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
