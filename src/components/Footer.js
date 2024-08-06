// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import CSS for footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
      </div>
      <div className="footer-info">
        <p>&copy; 2024 Ashish. All rights reserved.</p>
        <p>Company Details: Flipkart Pvt. Ltd., 1234 Elm Street, City, Country</p>
      </div>
    </footer>
  );
};

export default Footer;
