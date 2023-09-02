import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import ViewProductCustomer from './ViewProductCustomer';
import ViewCart from '../Components/ViewCart';



export default function CustomerHome() {

    const [user, setUser] = useState(null);

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to="/" className='nav-link px-3'>
                                <b className='text-warning'>First Choice</b>
                            </Link>
                            <li className="nav-item ">
                                <Link to="/c_home" className='nav-link px-3'>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/c_Cart" className='nav-link px-3'>View Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/c_wallet" className='nav-link px-3'>View Wallet</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/c_profile" className='nav-link px-3'>My Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/c_orders" className='nav-link px-3'>My Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/logout" className='nav-link px-3'>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <p><b>Welcome {user ? user.c_name : ''}</b></p>              
            <ViewProductCustomer/>
            <ViewCart/>
            <div>

<h1 className='text-white'>Welcome Customer</h1>

 

            </div>

        </div>
    )
}
