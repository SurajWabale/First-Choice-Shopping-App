import React, { useEffect, useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  const placeOrder = () => {
    // Implement your logic for placing an order here
    // You can send a request to your server or perform any other actions as needed.
    // After placing the order, you can clear the cart.
    clearCart();
    alert('Order placed successfully!');
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Number</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Size</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.p_name}</td>
                  <td>₹{item.price}.00</td>
                  <td>{item.c_id.c_name}</td>
                  <td>{item.b_id.b_name}</td>
                  <td>{item.s_id.size}</td>
                  <td>
                    <button onClick={() => removeItem(index)} className="btn btn-link">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right">
            <p><strong>Total: ₹{calculateTotal().toFixed(2)}</strong></p>
            <button onClick={clearCart} className="btn btn-danger">Clear Cart</button>
            <button onClick={placeOrder} className="btn btn-success ml-2">Place Order</button>
          </div>
        </>
      )}
    </div>
  );
}
