// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Online Inventory Management System</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/category">Category</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/orders">Order Item</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signupget">SignUp</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
