import React from "react";
import Feature from "../../UI/Feature/Feature";

import classes from "./Deals.module.css";
import { fire, cashback, terms, saving } from "./import";

const Deals = () => {
  return (
    <div className={classes.deals}>
      <div className={classes.deals_content}>
        <div className={classes.deals_title}>
          <h1>
            Hot <img src={fire} alt="fire" />
            <br />
            deals for you
          </h1>
          <p>Online shopping for retail sales direct to consumers</p>
        </div>
        <div className={classes.deals_feature}>
          <Feature
            imgurl={cashback}
            imgtext="caskback png"
            title="1.5% cashback"
            text="Online shopping for retail sales direct to consumers"
          />
          <Feature
            imgurl={terms}
            imgtext="terms png"
            title="30-day terms"
            text="Online shopping for retail sales direct to consumers"
          />
          <Feature
            imgurl={saving}
            imgtext="saving png"
            title="Save Money"
            text="Online shopping for retail sales direct to consumers"
          />
        </div>
      </div>
    </div>
  );
};

export default Deals;
