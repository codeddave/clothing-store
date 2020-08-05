import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header d-flex  ">
      <Link to="/">Logo</Link>

      <div className="options ml-auto">
        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
export default Header;
