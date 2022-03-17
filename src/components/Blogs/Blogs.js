import React from "react";

import classes from "./Blogs.module.css";
import blogIcon from "../../Assets/blog-icon.svg";
import starIcon from "../../Assets/star-icon.svg";
import CEO from "../../Assets/team2.jpg";
import Logo from "../../Assets/Logo.svg";

const Blogs = () => {
  return (
    <div className={classes.blog}>
      <div className={classes.container}>
        <div className={classes.eclipse}>
          <div></div>
          <div></div>
        </div>
        <div className={classes.header}>
          <div>
            <h1>What our happy client say</h1>
            <p>
              File storage made easy – including powerful features you won’t
              find anywhere else. Whether you’re.
            </p>
          </div>
          <div className={classes.icon1}>
            <img src={blogIcon} alt="blog icon" />
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.image}>
            <img src={CEO} alt="CEO" />
          </div>
          <div className={classes.title}>
            <img src={Logo} alt="logo" />
            <p>
              File storage made easy – including powerful features you won’t
              find anywhere else. Whether you’re.
            </p>
            <div>
              <h4>Bradley Barners</h4>
              <p>Cheif Executive Officer</p>
            </div>
          </div>
          <div>
            <div className={classes.icon2}>
              <img src={starIcon} alt="star icon" />
            </div>
            <div className={classes.circle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
