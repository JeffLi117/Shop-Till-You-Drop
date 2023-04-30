import React from 'react';
import { Link } from 'react-router-dom';

function ItemAddedOverlay({foundItem}) {
  return (
    <div className="overlay" >
        <div className="overlayContent">
            <div>{foundItem.name} poster</div>
            <div>was added to your cart</div>
            <Link to="/shop" >
                <button className="overlayKeepShop" >Continue Shopping</button>
            </Link>
            <Link to="/cart" >
                <button className="overlayCheckout">Checkout</button>
            </Link>
        </div>
    </div>
  )
}

export default ItemAddedOverlay