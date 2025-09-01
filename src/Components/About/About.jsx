import React from 'react'
import { assets } from '../../assets/assets'
import './About.css'

const About = () => {
  return (
    <>
    <div className="about-section">
        <h1 id='heading'>ABOUT US</h1>
    <div className='About-div'>
        <div className="about-image">
            <img src={assets.About} alt="" />
        </div>
        <div className="about-content">
            <h1>Our Story</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, reprehenderit nobis. Consequatur nisi nemo, autem alias perspiciatis ratione illum aliquam at, saepe impedit ut quo, nobis expedita quibusdam sint optio?</p>
        </div>      
    </div>
    </div>

    </>
  )
}

export default About
