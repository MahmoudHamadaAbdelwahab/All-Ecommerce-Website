import React  , {createContext , useState}from 'react'
import ProductCard from './../Products/ProductCard';

export const shoppingContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i = 1; i < ProductCard.length + 1 ;i++){
        cart[i] = 0;
    }
    console.log(cart)
    return cart
}

 const Context = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());

    const addToCart = (item) => {
        setCartItems(()=> item);
    }

    const contextValue = {
        cartItems,
        addToCart,
    }

    return (
        <shoppingContext.Provider value={contextValue}>{props.children}</shoppingContext.Provider>
    )
}
export default Context;