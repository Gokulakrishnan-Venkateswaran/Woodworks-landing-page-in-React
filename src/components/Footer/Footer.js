import React from "react";

import classes from "./Footer.module.css";
import Button from "../../UI/Button/button";
import { fb, twitter, linkedin, pin, whiteLogo } from "./import";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={`${classes.topfoot} ${classes.topcontent}`}>
          <>
            <h1>
              Start your business today for <br />
              $0+ state fees.
            </h1>
          </>
          <div>
            <Button className={classes.white}>Get Started</Button>
            <Button className={classes.green}>Contact Us</Button>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={`${classes.bottomfoot} ${classes.bottomcontent}`}>
          <div className={`${classes.column} ${classes.columnone}`}>
            <div>
              <img className={classes.logo} src={whiteLogo} alt="Logo" />
              <p>
                Optix seamlessly connects your members with the community,
                resources.
              </p>
              <div className={classes.social}>
                <a>
                  <img src={fb} alt="Facebook logo" />
                </a>
                <a>
                  <img src={twitter} alt="Twitter logo" />
                </a>
                <a>
                  <img src={linkedin} alt="LinkedIn logo" />
                </a>
                <a>
                  <img src={pin} alt="Pinterest logo" />
                </a>
              </div>
            </div>
          </div>
          <div className={`${classes.column} ${classes.columntwo}`}>
            <div>
              <h4>Entity types</h4>
              <a>Knowledge base</a>
              <a>Security</a>
              <a>Privacy Policy</a>
              <a>Partners</a>
              <a>About us</a>
              <a>FAQs</a>
            </div>
          </div>
          <div className={`${classes.column} ${classes.columntwo}`}>
            <div>
              <h4>Services</h4>
              <a>Contact Us</a>
              <a>Press</a>
              <a>Payroll</a>
              <a>Library</a>
              <a>Blog</a>
              <a>Help Center</a>
            </div>
          </div>
          <div className={`${classes.column} ${classes.columntwo}`}>
            <div>
              <h4>Resources</h4>
              <a>Pricing</a>
              <a>FAQs</a>
              <a>Contact Support</a>
              <a>Privacy Policy</a>
              <a>Terms</a>
            </div>
          </div>
          <div className={`${classes.column} ${classes.columntwo}`}>
            <div>
              <h4>Support</h4>
              <a>Contact</a>
              <a>Affiliates</a>
              <a>Sitemap</a>
              <a>Cancelation Policy</a>
              <a>Pricing</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
