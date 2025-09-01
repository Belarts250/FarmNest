import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <>
    <div className='Footer'>
        <div className="left-content">
            <div className="logo-div">
            <img src={assets.Logo} alt="" />
            <h1>FarmNest</h1>
            </div>

            <p>Farm Nest is your trusted source for fresh poultry and eggs. We bring farm-quality products directly to your table with care, quality, and reliability</p>
        </div>
        <div className="center-content">
            <h6>Quick Links</h6>
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Products</a>
            <a href="">Cart</a>
        </div>
        <div className="right-content">
            <h6>Contact Info</h6>
            <p>Address: Kigali, Rwanda</p>
            <p>Phone: +250 78000000</p>
            <p>Email: ..........</p>
            {/* social medias */}
        </div>
    </div>
    <hr />
    <div className="footer-bottom">
            <p>&copy; Copyright all rights reserved. FarmNest 2025</p>
    </div>  
    </>
  )
}

export default Footer
