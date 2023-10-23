import React from 'react'

 const ShoppingProduct = ({cartItems}) => {
  return (
    <div>
        <h1> the cart items</h1>
        <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingProduct