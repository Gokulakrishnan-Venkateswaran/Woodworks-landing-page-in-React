import React from "react";

import Card from "../../UI/Card/Card";
import DummyData from "../../Dummy_data.json";

import classes from "./Products.module.css";
import Arrow from "../../Assets/Arrow.svg";

const Products = () => {
  const productItems = DummyData.map((item) => (
    <Card
      id={item.id}
      key={item.id}
      title={item.title}
      offerprice={item.offerPrice}
      oldprice={item.oldPrice}
      image={item.image}
      alt={item.title}
    />
  ));
  return (
    <div className={classes.products}>
      <div className={classes.heading}>
        <h1>Products</h1>
        <p>
          <a href="/" className={classes.btn}>
            See All <img src={Arrow} />
          </a>
        </p>
      </div>
      <div className={classes.category}>
        <p>
          <a href="#">All</a>
        </p>
        <p>
          <a href="#">Sofa</a>
        </p>
        <p>
          <a href="#">Chair</a>
        </p>
        <p>
          <a href="#">Lamp</a>
        </p>
      </div>
      <div className={classes.items}>{productItems}</div>
    </div>
  );
};

export default Products;
