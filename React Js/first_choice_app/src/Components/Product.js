import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ViewProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getallproducts")
      .then(res => res.json())
      .then(data => setData(data))
  }, []);



return (

    <div className="container-fluid mt-4 border bg-light">
      <table className="table table-striped">
        <tbody>
          {data.map((v, index) => (
            <tr key={v.p_id} >
              <td style={{ width: '15%', }} className={`bg-${index % 6 + 1}`} >
              <img src={`data:image/png;base64,${v.p_image}`} alt="Product" className="img-thumbnail" />
              </td>
              <td style={{ width: '35%' }}>
                <div>
                  <strong>Product Name:</strong> {v.p_name}
                </div>
                <div>
                  <strong>Product Description:</strong> {v.p_desc}
                </div>
                <div>
                  <strong>Size:</strong> {v.s_id.size}
                </div>
                <div>
                  <strong>Brand:</strong> {v.b_id.b_name}
                </div>
                <div>
                  <strong>Category:</strong> {v.c_id.c_name}
                </div>
                <div>
                  <strong>Vendor:</strong> {v.v_id.v_name}
                </div>
              </td>
              <td style={{ width: '20%' }}>
                <div className="text-success">
                  <strong>Price:</strong> ₹{v.price}.00
                </div>
              </td>
              <td style={{ width: '30%' }}>
                <Link to="/add_to_cart" className="btn btn-primary btn-block">Add to Cart</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}