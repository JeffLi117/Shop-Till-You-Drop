import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function InputNum({ID, count, handlerThroughInput}) {

    const [itemID, setItemID] = useState();
    const [itemCount, setItemCount] = useState();

    function countUp() {
        if (itemCount < 10) {
            setItemCount(itemCount + 1)
        };
    }

    function countDown() {
        if (itemCount > 0) {
            setItemCount(itemCount - 1)
        };
    }

    function deleteItem() {
        setItemCount(0);
    }

    useEffect(() => {
        setItemCount(count);
        setItemID(ID);
    }, [])

    useEffect(() => {
        handlerThroughInput([itemID, itemCount]);
    }, [itemCount])

  return (
    <div className="trashSep">
        <div className="notTrash">
            <button className="counterBtn" onClick={countDown} >
                <FontAwesomeIcon icon={faMinus}/>
            </button>
            <input type="number" min="0" max="100" placeholder={itemCount} />
            <button className="counterBtn" onClick={countUp} >
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
        <div className="trashRow" >
            <button className="counterBtn trash" onClick={deleteItem} >
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    </div>
  )
}
