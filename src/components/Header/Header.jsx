import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.scss";
import { auth } from "../../firebase/firebase.util";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

function Header({ currentUser, hidden }) {
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
        <CartIcon/>
      </div>
      {

        hidden ? null:  <CartDropdown/>
      }
     
    </div>
  );
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);
