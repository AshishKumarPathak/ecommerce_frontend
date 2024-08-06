// Cart.js

import React from 'react';
import './Cart.css'; // Import CSS for styling

const Cart = () => {
  // Dummy cart data
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10, quantity: 1 },
    { id: 2, name: 'Product 2', price: 20, quantity: 2 },
    { id: 3, name: 'Product 3', price: 30, quantity: 1 },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-summary">
        <h2>Total: ${calculateTotal()}</h2>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
