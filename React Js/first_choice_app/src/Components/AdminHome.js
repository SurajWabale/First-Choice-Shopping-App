import React from 'react'
import {Link} from 'react-router-dom'
import admin1 from './Images/admin1.jpg'
import { useEffect ,useState } from 'react';

export default function AdminHome() {

    const [user, setUser] = useState();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    setUser(loggedUser);
  }, []);


    return (
        <div  >
            <header>
            <div  >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to="/a_home" className='nav-link px-3'>
                                <b className='text-warning'>First Choice</b>
                            </Link>
                            <li className="nav-item ">
                                <Link to="/a_home" className='nav-link px-3'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/a_categories" className='nav-link px-3'>View Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add_category" className='nav-link px-3'>Add Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/a_product_Details" className='nav-link px-3'>View Product Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/a_vendors" className='nav-link px-3'>View Vendors</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/a_customers" className='nav-link px-3'>View Customers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/a_orders" className='nav-link px-3'>View Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/a_wallet" className='nav-link px-3'>View Wallet</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/logout" className='nav-link px-3'>Logout</Link>
                            </li>
                            <li>
                            </li>
            <li className='text-right'>
                <h3 className='text-success' >Welcome {user && user.uid}</h3>
            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div style={{ backgroundImage: `url(${admin1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '93vh'  }}>
            </div>
            </header>
          
        </div>
    )
}
