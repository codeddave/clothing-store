import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartAction";
import "./CartIcon.scss";
import { ReactComponent as Cart } from "../../shopping-bag.svg.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <Cart className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
