import React from "react";
import mobile from '../images/apple-iphone-15-plus-black.png'
import cart from '../images/cart.png'

function Header(props) {
    console.warn("Header", props.cardData)
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.cardData.length}</span>
                <img src={cart} alt="" />
            </div>
        </div>
    )
}

export default Header