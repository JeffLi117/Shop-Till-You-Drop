import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {

    const shopItemStyle = {
        color: "var(--third)"
    };

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    const fetchItems = async () => {
        const data = await fetch("https://botw-compendium.herokuapp.com/api/v2/category/equipment");
        const items = await data.json();
        const lessItems = getRandom(items.data, 10);
        for (let i = 0; i < lessItems.length; i++) {
            let sepArr = lessItems[i].name.split(" ");
            for (let k = 0; k < sepArr.length; k++) {
                sepArr[k] = sepArr[k][0].toUpperCase() + sepArr[k].slice(1);
            }
            lessItems[i].name = sepArr.join(" ");
        }
        console.log(lessItems);
        setItems(lessItems);
    }

    return (
        <div className="shopList" >
            {items.map(item => (
                <h1 key={item.id}>
                    <Link to={`/shop/${item.id}`} style={shopItemStyle} >
                        {item.name}
                    </Link>
                </h1>
            ))}
        </div>
    )
}

export default Shop