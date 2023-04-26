import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Shop({items, handlerID}) {

    const shopItemStyle = {
        color: "var(--third)"
    };

    function toRouteSwitch(id) {
        handlerID(id);
    }

    return (
        <div className="shopList" >
            {items.map(item => (
                <h1 key={item.id}>
                    <Link to={`/shop/${item.id}`} style={shopItemStyle} onClick={() => {toRouteSwitch(item.id)}} >
                        <div className="itemBox">
                            <div className="itemName">
                                {item.name}
                            </div>
                            <div className="itemName">
                                <img src={item.image} alt="each specific item" className="itemBoxImage" />
                            </div>
                            <div className="itemPrice">
                                ${item.price}
                            </div>
                        </div>
                    </Link>
                </h1>
            ))}
        </div>
    )
}

export default Shop