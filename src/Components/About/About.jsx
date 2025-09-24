import React from 'react'
import { assets } from '../../assets/assets'
import './About.css'

const About = () => {
  return (
    <>
    <div className="about-section" id='about'>
        <h1 id='heading'>ABOUT US</h1>
    <div className='About-div'>
        <div className="about-image">
            <img src={assets.About} alt="" />
        </div>
        <div className="about-content">
            <h1>Who we are</h1>
            <hr />
            <p>We are a local business that provides fresh poultry products to our community. Our mission is to make poultry shopping simple, safe, and affordable.</p>
        </div>      
    </div>
    </div>

    </>
  )
}

export default About
