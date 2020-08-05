import React from "react";
import "./FormInput.scss";

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input className="inputt" onChange={handleChange} {...otherProps} />

      {label ? (
        <label
          className={`${otherProps.value.length ? "shrink" : ""} form-labell`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
export default FormInput;
