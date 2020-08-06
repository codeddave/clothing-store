import React from "react";
import "./Collection.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

function Collection({ title, items }) {
  return (
    <div className="collection ">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview   ">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...restOfProps }) => (
            <CollectionItem key={id} {...restOfProps} />
          ))}
      </div>
    </div>
  );
}
export default Collection;