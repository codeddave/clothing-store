import React from "react";
import "./MenuItem.scss";

function MenuItem({ title, image }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW!</span>
      </div>
    </div>
  );
}
export default MenuItem;
