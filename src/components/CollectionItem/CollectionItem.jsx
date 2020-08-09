import React from "react";
import "./CollectionItem.scss";
import CustomButton from "../CustomButton/CustomButton";

function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <div className="collection-item ml-4 ">
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
      <CustomButton inverted={true}>Add To Cart</CustomButton>
    </div>
  );
}
export default CollectionItem;
