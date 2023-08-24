import React from 'react'
import './CSS/Footer.css'
import logo1 from './Images/logo1.jpg';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
            <img src={logo1} alt="" />
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-info">
          <p>&copy; 2023 First Choice Clothing Store. All rights reserved.</p>
          <p>FC Road, PUNE, INDIA</p>
          Email: admin@firstchoice.com
          Phone: +7083663232
        </div>
      </div>
    </footer>
  );
};

export default Footer;

