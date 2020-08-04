import React from "react";
import "./Collection.scss";

function Collection({ title, items }) {
  return (
    <div className="collection">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <div key={item.id}> {item.name} </div>
          ))}
      </div>
    </div>
  );
}
export default Collection;
