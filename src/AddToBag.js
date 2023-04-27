import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


function AddToBag({itemNum, handlerDown, handlerUp, handlerAdd}) {

    function submitAdd() {
        handlerAdd();
    }

    function countUp() {
        handlerUp();
    }

    function countDown() {
        handlerDown();
    }

  return (
    <div className="addCounter" >
        <div className="numberInput">
            <button className="counterBtn" onClick={countDown} >
                <FontAwesomeIcon icon={faMinus}/>
            </button>
            <input type="number" min="0" max="100" placeholder={itemNum} />
            <button className="counterBtn" onClick={countUp} >
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
        <button onClick={submitAdd} >Add To Bag</button>
    </div>
  )
}

export default AddToBag