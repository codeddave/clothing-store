import React from "react";
import "./CustomButton.scss";

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
  return (
    <div>
      <button
        className={`${isGoogleSignIn ? "google-sign" : ""} ${inverted ? "inverted" : ""} custom-button`}
        {...otherProps}
      >
        {children}{" "}
      </button>
    </div>
  );
}
export default CustomButton;
