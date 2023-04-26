import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Contact from "./Contact";
import ItemDetail from "./ItemDetail";
import Nav from "./Nav";

const RouteSwitch = () => {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop/:id" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouteSwitch;

/*   <nav>
        <h3>Shop Name</h3>
        <ul className="nav-links">
            <li>Home</li>
            <li>Shop</li>
            <li>Contact</li>
        </ul>
    </nav> */