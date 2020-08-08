import React from 'react'
import "./CartIcon.scss"
import {ReactComponent as Cart} from "../../shopping-bag.svg.svg"

 function CartIcon() {
    return (
        <div className="cart-icon">
            <Cart className="shopping-icon"/>
            <span className="item-count">0</span>
            
        </div>
    )
}
export default CartIcon