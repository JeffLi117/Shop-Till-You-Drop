import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Contact from "./Contact";
import ItemDetail from "./ItemDetail";
import Nav from "./Nav";
import poster1 from './posters/poster1.jpg';
import poster2 from './posters/poster2.jpg';
import poster3 from './posters/poster3.jpg';
import poster4 from './posters/poster4.jpg';
import poster5 from './posters/poster5.jpg';
import poster6 from './posters/poster6.jpg';
import poster7 from './posters/poster7.jpg';
import poster8 from './posters/poster8.jpg';
import poster9 from './posters/poster9.jpg';
import poster10 from './posters/poster10.jpg';


const RouteSwitch = () => {

    const [items, setItems] = useState([
        {
            name: "Movie", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
            id: 1,
            image: poster1,
            price: "19.99"
        },
        {
            name: "Movie", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
            id: 2,
            image: poster2,
            price: "19.99"
        },
        {
            name: "Movie", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
            id: 3,
            image: poster3,
            price: "19.99"
        },
        {
            name: "Movie", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
            id: 4,
            image: poster4,
            price: "19.99"
        },
        {
            name: "Movie", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
            id: 5,
            image: poster5,
            price: "19.99"
        },
        {
            name: "Movie", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
            id: 6,
            image: poster6,
            price: "19.99"
        },
        {
            name: "Movie", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
            id: 7,
            image: poster7,
            price: "19.99"
        },
        {
            name: "Movie", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
            id: 8,
            image: poster8,
            price: "19.99"
        },
        {
            name: "Movie", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
            id: 9,
            image: poster9,
            price: "19.99"
        },
        {
            name: "Movie", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
            id: 10,
            image: poster10,
            price: "19.99"
        },        
    ]);
    const [ID, setID] = useState(null);

    function handlerID(id) {
        setID(id);
    }

    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<Shop items={items} handlerID={handlerID} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop/:id" element={<ItemDetail items={items} ID={ID} />} />
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