import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { FaBars } from "react-icons/fa";

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
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Products</a>
            <a href="">Cart</a>
            <FaBars size={22} className='menu-bar' style={{color: "#555" , marginLeft: "20px"}}/>
        </div>
      
    </div>
  )
}

export default Navbar
