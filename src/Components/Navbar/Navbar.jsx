import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="left-content">
            <div className="logo-div">
            <img src={assets.Logo} alt="" />
            <h1>FarmNest</h1>
            </div>
        </div>
        <div className="content-right">
            <a href="/">Home</a>
            <a href="#about">About Us</a>
            <a href="#products">Products</a>
           <Link to="/cart">Cart</Link>
            <FaBars size={22} className='menu-bar' style={{color: "#555" , marginLeft: "20px"}}/>
        </div>
      
    </div>
  )
}

export default Navbar
