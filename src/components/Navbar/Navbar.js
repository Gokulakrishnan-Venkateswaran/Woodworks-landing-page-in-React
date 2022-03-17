import React, { useState } from "react";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import classes from "./Navbar.module.css";
import logo from "../../Assets/Logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="home">Home</a>
    </p>
    <p>
      <a href="about">About</a>
    </p>
    <p>
      <a href="products">Products</a>
    </p>
    <p>
      <a href="blog">Blogs</a>
    </p>
    <p>
      <a href="footer">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={classes.navbar}>
      <div className={classes.navbar_container}>
        <div className={classes.logo}>
          <img src={logo} alt="Wood Works logo" />
        </div>
        <div className={classes.nav_links}>
          <Menu />
        </div>
      </div>
      <div className={classes.menubar}>
        {toggleMenu ? (
          <RiCloseLine
            color="#242424"
            size={25}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#242424"
            size={25}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className={`scale-up-center ${classes.menubar_container}`}>
            <div className={classes.menubar_links}>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
