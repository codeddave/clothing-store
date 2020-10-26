import React from 'react'
import {connect} from "react-redux"
import { createStructuredSelector } from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors"
import {selectCartTotal} from "../../redux/cart/cart.selectors"
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../StripeButton/StripeButton';


import "./Checkout.scss"

function Checkout({cartItems, cartTotal}) {


    return (
        <div className="checkout-page">
          <div className="checkout-header">

              <div className="header-block">
                  <span>Product</span>
             </div>
              <div className="header-block">
                  <span>Description</span>
             </div>
              <div className="header-block">
                  <span>Quantity</span>
                  </div>
              <div className="header-block">
                  <span>Price</span>
              </div>
              <div className="header-block">
                  <span>Remove</span>
             </div>
          </div>


          {
              cartItems.map(cartItem => (
                <CheckoutItem key ={cartItem.id} cartItem={cartItem}/>
              ))
          }

          <div className="total">
            <span>TOTAL: ${cartTotal}</span>
          </div>
          <StripeCheckoutButton price = {cartTotal}/>
        </div>
    )
}


const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
})
export default connect(mapStateToProps)(Checkout)