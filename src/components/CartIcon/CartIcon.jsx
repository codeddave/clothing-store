import React from 'react'
import {connect} from 'react-redux'
import{toggleCartHidden} from "../../redux/cart/cartAction"
import "./CartIcon.scss"
import {ReactComponent as Cart} from "../../shopping-bag.svg.svg"

 function CartIcon({toggleCartHidden}) {
    return (
        <div className="cart-icon" onClick = {toggleCartHidden}>
            <Cart className="shopping-icon"/>
            <span className="item-count">0</span>
            
        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
        toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon)