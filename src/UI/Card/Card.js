import React from "react";

import CartIcon from "../../Assets/Cart Icon.svg";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.card}>
      <div className={classes.container}>
        <div className={classes.blue}>
          <div className={classes.icon}>
            <img src={CartIcon} />
          </div>
          <h3>{props.title}</h3>
          <div className={classes.prices}>
            <p>{props.offerprice}</p>
            <p className={classes.strike}>{props.oldprice}</p>
          </div>
        </div>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
      </div>
    </div>
    // <div className={classes.card}>
    //   <div className={"card-container"}>
    //     <img className={classes.icon} src={CartIcon} />
    //     <div className={classes.blue}>
    //       <h3>{props.title}</h3>
    //       <div>
    //         <p>{props.offerprice}</p>
    //         <p className={classes.strike}>{props.oldprice}</p>
    //       </div>
    //     </div>
    //     <img className={classes.image} src={props.image} alt={props.title} />
    //   </div>
    // </div>
  );
}

export default Card;
