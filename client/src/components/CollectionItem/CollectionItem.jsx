import React from "react";
import "./CollectionItem.scss";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cartAction";

import CustomButton from "../CustomButton/CustomButton";

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="image"
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        onClick={() => addItem(item)}
        inverted={true}
        className="custom-button"
      >
        Add To Cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
