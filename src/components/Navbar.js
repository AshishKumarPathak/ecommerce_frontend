import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCaretDown } from 'react-icons/fa';
import './Navbar.css';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo-search">
        <div className="navbar__logo">
          <img src="./logo.png" alt="App Logo" className="logo-image" />
          <span className="logo-name">Flipkart</span>
        </div>
        <div className="navbar__search">
          <input type="text" placeholder="Search products and items..." />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div 
        className="navbar__links"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <div className="dropdown">
          <Link 
            to="/login" 
            className="dropdown-link"
            onClick={() => setShowDropdown(false)}
          >
            Login
          </Link>
          <FaCaretDown className="dropdown-icon" />
          {showDropdown && (
            <div className="dropdown-menu">
              <Link to="/signup" onClick={() => setShowDropdown(false)}>Sign Up</Link>
              <Link to="/" onClick={() => setShowDropdown(false)}>Home</Link>
              <Link to="/products" onClick={() => setShowDropdown(false)}>Products</Link>
              <Link to="/profile" onClick={() => setShowDropdown(false)}>My Profile</Link>
              <Link to="/wishlist" onClick={() => setShowDropdown(false)}>Wishlist</Link>
              <Link to="/rewards" onClick={() => setShowDropdown(false)}>Rewards</Link>
            </div>
          )}
        </div>
        <Link to="/cart" className="navbar-link">Cart</Link>
        <Link to="/contact" className="navbar-link">Contact Us</Link>
      </div>
    </nav>
  );
};

export default NavBar;
