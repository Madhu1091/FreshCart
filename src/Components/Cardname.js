import React from 'react';
import cart from '../Images/cart.png'

export default function Cardname() {
    return(
        <div>
            <img src={cart} alt="cartImage"/>
            <h4>FreshCart</h4>
        </div>
    );
}