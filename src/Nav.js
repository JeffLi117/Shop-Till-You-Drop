import React from 'react';
import { Link } from 'react-router-dom';

function Nav({cart}) {
    const totalItemsNum = Object.values(cart).reduce((a, b) => a + b, 0);
  return (
    <nav>
        <h3>Movie Poster Madness</h3>
        <ul className="nav-links">
            <Link to="/home" >
                <li>Home</li>
            </Link>
            <Link to="/shop" >
                <li>Shop</li>
            </Link>
            <Link to="/contact" >
                <li>Contact</li>
            </Link>
            <Link to="/cart" >
                <li>Cart ({totalItemsNum})</li>
            </Link>
        </ul>
    </nav> 
  )
}

export default Nav