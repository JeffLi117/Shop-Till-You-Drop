import React, { useState, useEffect } from "react";
import { 
    BrowserRouter,
    generatePath,
    Routes,
    Route,
    useNavigate,
    useParams, 
    Link,
} from "react-router-dom";
import App from "./App";
import Contact from "./Contact";
import Nav from "./Nav";
import Home from "./Home";
import AddToBag from './AddToBag';
import Cart from "./Cart";
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

const items = [
    {
        name: "Highway", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. I'm on the highway to hell. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
        id: 1,
        image: poster1,
        price: "19.99"
    },
    {
        name: "Gold", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Everything that glitters is not gold. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
        id: 2,
        image: poster2,
        price: "29.99"
    },
    {
        name: "Future Destiny", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Look into the crystal ball to see your future destiny. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
        id: 3,
        image: poster3,
        price: "24.99"
    },
    {
        name: "Sunset Dreams", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. In your dreams, we shall ride into the sunset. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
        id: 4,
        image: poster4,
        price: "15.99"
    },
    {
        name: "Ascend", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Ascend beyond the limits of humanity. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
        id: 5,
        image: poster5,
        price: "18.99"
    },
    {
        name: "Demon", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. There is a demon lurking in all of us. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
        id: 6,
        image: poster6,
        price: "19.99"
    },
    {
        name: "Never Be Alone", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. With you, I'll never be alone. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
        id: 7,
        image: poster7,
        price: "13.99"
    },
    {
        name: "Dark", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. But you merely adopted the dark; I was born in it, molded by it. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
        id: 8,
        image: poster8,
        price: "23.99"
    },
    {
        name: "Journey To The Peak", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst. Join me on my journey to the peak, to deliver the ring.",
        id: 9,
        image: poster9,
        price: "15.99"
    },
    {
        name: "Scary Clown", 
        description: "Clowns scare me. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus mi at lobortis luctus. Suspendisse nibh magna, pharetra ut orci id, scelerisque accumsan felis. In vulputate metus eu quam tincidunt blandit. Nam sed eros velit. Nunc hendrerit sapien augue, tempor bibendum est auctor suscipit. Cras a volutpat mauris. Etiam quis mollis odio. Aenean ornare quis eros in tempus. In hac habitasse platea dictumst.",
        id: 10,
        image: poster10,
        price: "10.99"
    },        
];

const Products = ({cart, setCart}) => {
    const { ID } = useParams();
    const foundItem = items[(ID-1)];

    const [itemNum, setItemNum] = useState(1);

    function handlerUp() {
        if (itemNum < 10) {
            setItemNum(itemNum + 1)
        }
    }
    function handlerDown() {
        if (itemNum > 0) {
            setItemNum(itemNum - 1)  
        }  
    }
    function handlerAdd() {
        if (Object.hasOwn(cart, foundItem.id)) {
            setCart({...cart, 
                [foundItem.id]: cart[foundItem.id] + itemNum,
            })
        } else {
            console.log("making NEW key on cart");
            setCart({...cart, 
                [foundItem.id]: itemNum,
            })
        }
    }

    return (
        <div className="ItemDetail" >
            <div className="imageHolder">
                <img src={foundItem.image} alt="movie poster" className="movieImage" />
            </div>
            <div className="notImg">
                <AddToBag 
                    itemNum = {itemNum}
                    handlerUp = {handlerUp}
                    handlerDown = {handlerDown}
                    handlerAdd={handlerAdd}
                />
                <div className="movieTitle">
                    {foundItem.name} Poster
                </div>
                <div className="moviePrice">
                    {foundItem.price}
                </div>
                <div className="movieDetails">
                    {foundItem.description}
                </div>
            </div>
        </div>
    )
  };

const Shop = (/* {cart, setCart} */) => {

    const shopItemStyle = {
        color: "var(--third)"
    };

    const [ID, setID] = useState();
    const navigate = useNavigate();
  
    const handleProceed = (e) => {
      ID && navigate(generatePath("/shop/:id", { ID }));
    };

    /* function handlerSetCart() {
        setCart();
    } */
  
    return (
      <div className="shopList">
          {items.map((item) => (
            <h1 key={item.id}>
                <Link 
                    to={`/shop/${item.id}`} 
                    style={shopItemStyle} 
                    onClick={handleProceed} 
                    /* cart={cart} 
                    handlerSetCart={handlerSetCart} */
                >
                    <div className="itemBox">
                        <div className="itemName">
                            <img src={item.image} alt="each specific item" className="itemBoxImage" />
                        </div>
                        <div className="itemName">
                            {item.name}
                        </div>
                        <div className="itemPrice">
                            ${item.price}
                        </div>
                    </div>
                </Link>
            </h1>
          ))}
      </div>
    );
}; 

const RouteSwitch = () => {

    const [cart, setCart] = useState({});

    function handlerCart() {
        console.log("Should be resetting cart");
        /* setCart(); */
    }
    function addToCart() {

    }
    function removeFromCart() {

    }

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
      <BrowserRouter basename="/Shop-Till-You-Drop">
        <Nav cart={cart} />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart 
            cart={cart} 
            setCart={setCart} 
            items={items} 
            handlerCart={handlerCart} 
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />} />
          <Route path="/shop/:ID" element={<Products cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
export default RouteSwitch;