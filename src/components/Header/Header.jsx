import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { auth } from "../../firebase/firebase.util";

function Header({ currentUser }) {
  return (
    <div className="header  ">
      <Link to="/">Logo</Link>

      <div className="options ">
        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/contact">
          CONTACT
        </Link>

        {currentUser ? (
          <span className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </span>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}
export default Header;
