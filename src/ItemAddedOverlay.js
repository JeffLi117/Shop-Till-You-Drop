import React from 'react';
import { Link } from 'react-router-dom';

function ItemAddedOverlay({foundItem, handlerSubmit}) {

  function handlerGray() {
    handlerSubmit();
  }

  return (
    <div className="overlay" >
        <div className="overlayContent">
            <div>{foundItem.name} poster</div>
            <div>was added to your cart</div>
            <Link to="/shop" >
                <button className="overlayKeepShop" onClick={handlerGray} >Continue Shopping</button>
            </Link>
            <Link to="/cart" >
                <button className="overlayCheckout" onClick={handlerGray} >Checkout</button>
            </Link>
        </div>
    </div>
  )
}

export default ItemAddedOverlay