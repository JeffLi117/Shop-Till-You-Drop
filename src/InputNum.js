import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

export default function InputNum({ID, count}) {

    const [itemID, setItemID] = useState();
    const [itemCount, setItemCount] = useState();

    function countUp() {
        /* addToCart(); */
    }

    function countDown() {
        /* removeFromCart(); */
    }

    useEffect(() => {
        setItemCount(count);
        setItemID(ID);
    }, [count])

  return (
    <div>
        <button className="counterBtn" onClick={countDown} >
            <FontAwesomeIcon icon={faMinus}/>
        </button>
        <input type="number" min="0" max="100" placeholder={itemCount} />
        <button className="counterBtn" onClick={countUp} >
            <FontAwesomeIcon icon={faPlus}/>
        </button>
    </div>
  )
}
