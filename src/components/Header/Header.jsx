import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.scss";
import { auth } from "../../firebase/firebase.util";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { HeaderContainer,  OptionLink, OptionsContainer } from "./HeaderStyles";

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>

      <Link to="/">Logo</Link>
      <OptionsContainer>

      
        <OptionLink  to="/shop">
          SHOP
        </OptionLink>

        <OptionLink to="/contact">
          CONTACT
        </OptionLink>

        {currentUser ? (
          <OptionLink as = "div"  onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
      </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
