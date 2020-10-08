import React from "react";
import "./CartDropdown.scss";
import { connect } from "react-redux";

import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cartAction"
import {
Link
} from "react-router-dom";

function CartDropdown({ cartItems, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">

        {
          cartItems.length ?
          cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        : 
        <span className="empty-message">Your cart is empty</span>
        }
      </div>

      <Link to="/checkout">   
        <CustomButton onClick={()=> dispatch(toggleCartHidden())}>GO TO CHECKOUT   
          
        </CustomButton>
      </Link>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
