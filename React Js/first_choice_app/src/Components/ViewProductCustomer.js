
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ViewProductCustomer() {
  const [data, setData] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [addedToCart, setAddedToCart] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch("http://localhost:8080/getallproducts")
      .then(res => res.json())
      .then(data => setData(data))
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    setSuccessMessage('Item added to cart successfully!');
    setAddedToCart(prevState => ({
      ...prevState,
      [product.p_id]: true,
    }));
  };

  // Function to filter products based on the search query
  const filterProducts = () => {
    if (searchQuery.trim() === '') {
      return data; // If the search query is empty, return all products.
    }
    return data.filter(product => product.p_name.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  return (
    <div className="container-fluid mt-4 border bg-light">
      <div className="text-center mb-4">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by product name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      <table className="table table-striped">
        <tbody>
          {filterProducts().map((v, index) => (
            <tr key={v.p_id} className={`bg-${index % 6 + 1}`}>
              <td style={{ width: '15%' }}>
                <img
                  src={`data:image/png;base64,${v.p_image}`}
                  alt="Product"
                  className="img-thumbnail"
                  style={{ width: '200px', height: '200px' }}
                />
              </td>
              <td style={{ width: '50%' }}>
                <div className="product-details">
                <div className="row">
                    <div className="col">
                    <strong>Product Name:</strong> {v.p_name}
                    </div>
                    <div className="col">
                    <strong>Product Description:</strong> {v.p_desc}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <strong>Size:</strong> {v.s_id.size}
                    </div>
                    <div className="col">
                    <strong>Brand:</strong> {v.b_id.b_name}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <strong>Category:</strong> {v.c_id.c_name}
                    </div>
                    <div className="col">
                    <strong>Vendor:</strong> {v.v_id.v_name}
                    </div>
                </div>
                </div>
              </td>
              <td style={{ width: '15%' }}>
                <div className="product-price text-success">
                  <strong>Price:</strong> ₹{v.price}.00
                </div>
              </td>
              <td style={{ width: '20%' }}>
                <div className="add-to-cart">
                  {addedToCart[v.p_id] ? (
                    <div className="alert alert-success">Added to Cart</div>
                  ) : (
                    <button onClick={() => addToCart(v)} className="btn btn-primary btn-block">Add to Cart</button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center mt-4">
        <Link to="/view_cart" className="btn btn-success">View Cart</Link>
      </div>
    </div>
  );
}
