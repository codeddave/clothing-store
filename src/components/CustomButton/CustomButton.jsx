import React from "react";
import "./CustomButton.scss";

function CustomButton({ children, ...otherProps }) {
  return (
    <div>
      <button className="custom-button" {...otherProps}>
        {children}{" "}
      </button>
    </div>
  );
}
export default CustomButton;
