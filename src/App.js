import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup'; // Ensure this import exists
import Cart from './components/Cart';
import Contact from './components/Contact';
import Product from './components/Product';
import Myprofile from './components/Myprofile';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
          <Route path="/profile" element={<Myprofile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
