import React from "react";
import mobile from '../images/apple-iphone-15-plus-black.png'
import cart from '../images/cart.png'

function Home(props) {
    //console.warn("Home", props)
    return (
        <div>
            <h1>Home Component</h1>
            <div className="card-wrapper">
                <div className="img-wrapper item">
                    <img src={mobile} alt="" />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price: 1000$</span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() => props.addToCartHandler({ price: 1000, name: "iphone 11" })}>Add To Cart</button>
                    <button className="remove-cart-btn" onClick={() => props.removeTOCartHandler()}>Remove To Cart</button>

                </div>
            </div>
        </div>
    )
}

export default Home