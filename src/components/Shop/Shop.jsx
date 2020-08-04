import React, { Component } from "react";
import SHOP_DATA from "./Shop.data";
import Collection from "../Collection/Collection";

class Shop extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="container">
        {collections.map(({ id, ...otherData }) => (
          <Collection key={id} {...otherData} />
        ))}
      </div>
    );
  }
}
export default Shop;
