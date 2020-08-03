import React from "react";
import "./MenuItem.scss";

function MenuItem({ title, image, size }) {
  return (
    <div className={` ${size} menu-item`}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW!</span>
      </div>
    </div>
  );
}
export default MenuItem;
