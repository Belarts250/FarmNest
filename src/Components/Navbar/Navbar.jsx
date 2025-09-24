import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className='Navbar'>
        <div className="left-content">
          <div className="logo-div">
            <img src={assets.Logo} alt="FarmNest Logo" />
            <h1>FarmNest</h1>
          </div>
        </div>

        <div className="content-right">
          <a href="/">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Products</a>
          <Link to="/cart">Cart</Link>
          
        </div>
        <FaBars size={22} className='menu-bar' onClick={toggleSidebar} />
      </div>

      {/* Sidebar for mobile */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <FaTimes size={22} className="close-bar" onClick={toggleSidebar} />
        <a href="/" onClick={toggleSidebar}>Home</a>
        <a href="#about" onClick={toggleSidebar}>About Us</a>
        <a href="#products" onClick={toggleSidebar}>Products</a>
        <Link to="/cart" onClick={toggleSidebar}>Cart</Link>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navbar;
