import {Link, Routes, Route} from 'react-router-dom';
import './App.css';
import AdminHome from './Components/AdminHome';
import CustomerHome from './Components/CustomerHome';
import VendorHome from './Components/VendorHome';
import LoginComp from './Components/LoginComp';
import Home from './Components/Home';
import Vendorreg from './Components/Vendorreg';
import React from 'react';
import RegistrationComp from './Components/RegistrationComp';
import Customerreg from './Components/Customerreg';
import {useSelector} from 'react-redux';
import ViewCategory from './Components/ViewCategory';
import AddCategory from './Components/AddCategory';
import ViewProduct from './Components/ViewProduct';
import ViewCustomer from './Components/ViewCustomer';
import LogoutComp from './Components/LogoutComp';
import ViewVendor from './Components/ViewVendor';
import ViewProductVendor from './Components/ViewProductVendor';
import AddProduct from './Components/AddProduct';
import ViewCart from './Components/ViewCart';

function App() {
    const mystate = useSelector((state) => state.logged);

    return (

        <div className="App">
             <div style={
                {
                    display: mystate.loggedIn ? "none" : "block"
                }
            }>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to="/" className='nav-link px-3'>
                                <b className='text-warning'>First Choice</b>
                            </Link>
                            <li className="nav-item ">
                                <Link to="/" className='nav-link px-3'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className='nav-link px-3'>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/registration" className='nav-link px-3'>Registration</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className='nav-link px-3'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className='nav-link px-3'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div> 

            <Routes>
                <Route path="a_home"
                    element={<AdminHome/>}/>
                <Route path="a_categories"
                    element={<ViewCategory/>}/>
                <Route path="add_category"
                    element={<AddCategory/>}/>
                <Route path="a_product_Details"
                    element={<ViewProduct/>}/>
                <Route path="a_vendors"
                    element={<ViewVendor/>}/>
                <Route path="a_customers"
                    element={<ViewCustomer/>}/>
                <Route path="a_orders" element=""/>
                <Route path="a_wallet" element=""/>
               
            </Routes>

            {/* Home Page Routes */}
            <Routes>
                <Route path="/"
                    element={<Home/>}/>
                <Route path="/login"
                    element={<LoginComp/>}/>
                <Route path="/Customer_Home"
                    element={<CustomerHome/>}/>
                <Route path="/Vendor_Home"
                    element={<VendorHome/>}/>
                <Route path="/Admin_Home"
                    element={<AdminHome/>}/>
                <Route path="/registration"
                    element={<RegistrationComp/>}/>
                <Route path="/vendorreg"
                    element={<Vendorreg/>}/>
                <Route path="/customerreg"
                    element={<Customerreg/>}/>
                     <Route path="/logout"
                    element={<LogoutComp/>}/>
            </Routes>

            {/* Customer Routes */}
            <Routes>
                <Route path='c_home'
                    element={<CustomerHome/>}/>
                <Route path='c_Cart'
                    element={<ViewCart/>}/>
                <Route path='c_wallet'
                    element={<CustomerHome/>}/>
                <Route path='c_orders'
                    element={<CustomerHome/>}/>
                <Route path='c_profile'
                    element={<CustomerHome/>}/>
                
            </Routes>

            {/* Vendor Routes */}
            <Routes>
                <Route path='v_home'
                    element={<VendorHome/>}/> {/* <Route path='v_categories'
                    element={<ViewCategory/>}/> */}
                <Route path='add_Product'
                    element={<AddProduct/>}/>
                <Route path='v_product_vendor'
                    element={<ViewProductVendor/>}/>
                <Route path='v_orders' element=""/>
               
            </Routes>
        </div>
    );
}
export default App;
