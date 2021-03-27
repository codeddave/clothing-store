import React from "react";
import "./User.scss";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

function User() {
  return (
    <div className="signs">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default User;
