import React from "react";
import mobile from '../images/apple-iphone-15-plus-black.png'
import cart from '../images/cart.png'

function Home() {
    return (
        <div>
            <div className="add-to-cart">
                <img src={cart} alt="" />
            </div>
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
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home