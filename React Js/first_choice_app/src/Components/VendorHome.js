import React from 'react'
import {Link} from 'react-router-dom'
import vlogo from './Images/vlogo.jpg'
import { useEffect ,useState } from 'react';

export default function VendorHome() {

    const [user, setUser] = useState();

    useEffect(() => {
      const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
      const uid=loggedUser.uid;
      const pwd=loggedUser.pwd;
      fetch("http://localhost:8080/loginCheck", {
      method: "POST",
      body: JSON.stringify({
          uid:""+uid,
          pwd:""+pwd
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(response => response.json())
  .then(json => /*console.log(json.login_id)*/
     fetch("http://localhost:8080/getVendor?login_id="+json.login_id)
     .then(response=>response.json())
     .then(json=> setUser(json))
     
  )}, []);
  localStorage.setItem("loggedVendor",JSON.stringify(user))  

  return (
    <div>

<div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div >
                        <ul className="navbar-nav">
                            <Link to="/" className='nav-link px-3'>
                                <b className='text-warning'>First Choice</b>
                            </Link>
                            <li className="nav-item ">
                                <Link to="/v_home" className='nav-link px-3'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/v_categories" className='nav-link px-3'>View Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add_Product" className='nav-link px-3'>Add Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/v_product_vendor" className='nav-link px-3'>View Product Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/v_orders" className='nav-link px-3'>View Orders</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link to="/logout" className='nav-link px-3'>Logout</Link>
                            </li>
                            <li>
                            <h3 >__________________________</h3>
                            </li>
            <li className='text-right'>
                <h3 className='text-white'>Welcome {user && user.uid}</h3>
            </li>
                        </ul>
                    </div>
                </nav>
              
            </div>
            <div style={{ backgroundImage: `url(${vlogo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '93vh'  }}>
            </div>
    </div>
  )
}
