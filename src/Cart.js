import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import InputNum from './InputNum';
import { Link } from "react-router-dom";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

function Cart({cart, items, handlerCart, handlerToInputNum}) {

    const cartArr = Object.entries(cart);
    const [total, setTotal] = useState(0);

    function handlerThroughInput(array) {
        handlerToInputNum(array);
    }

    function sumAll() {
        const midArr = [];
        for (let i = 0; i < cartArr.length; i++) {
            midArr.push((items[(Number(cartArr[i][0])-1)].price)*cartArr[i][1])
        }
        setTotal((Math.round((midArr.reduce((a,b) => a + b, 0)) * 100) / 100).toFixed(2));
    }

    useEffect(() => {
        sumAll();
    }, [cart])

    if (Object.values(cart).length === 0) {
        return (
            <div className="cartBackground" >
                <div className="cartTextHolder empty">
                    <div className="emptyCartText">
                        Your cart is empty
                    </div>
                    <div className="emptyCartIcon" >
                        <FontAwesomeIcon icon={faCartShopping} className="tiltCart" />
                    </div>
                    <div className="backShopDiv" >
                        <Link to="/shop">
                            <div>Back To Shop</div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="cartBackground" >
                <div className="cartTextHolder">
                    <div className="filledCartText">
                        Your shopping cart
                    </div>
                    <div className="filledCart">
                        {cartArr.map((el) => (
                            <div key={el} >
                                <div className="cartPic">
                                    <img src={items[(el[0]-1)].image} alt="each specific item" className="cartImage" />
                                </div>
                                <div className="cartNotImgInfo">
                                    <div className="cartName">
                                        {items[(el[0]-1)].name} Poster
                                    </div>
                                    <div className="cartPrice">
                                        ${items[(el[0]-1)].price}
                                    </div>
                                    <div className="cartEachButtons">
                                        <div className="numberInput">
                                            <InputNum
                                                ID={el[0]}
                                                count={el[1]}
                                                handlerThroughInput={handlerThroughInput}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <hr />
                    </div>
                    <div className="cartTotal">
                        Total: ${total}
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart