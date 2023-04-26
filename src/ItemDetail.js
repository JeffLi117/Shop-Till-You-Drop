import React from 'react'

function ItemDetail({items, ID}) {
    const foundItem = items.find(item => item.id === ID);
    return (
        <div className="ItemDetail" >
            <div className="moveTitle">
                {foundItem.name}
            </div>
            <div className="imageHolder">
                <img src={foundItem.image} alt="movie poster" className="movieImage" />
            </div>
            <div className="movePrice">
                {foundItem.price}
            </div>
        </div>
    )
}

export default ItemDetail