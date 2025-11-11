import React from 'react'
import './Landing.css'

const Landing = () => {
  return (
    <div className='main-div'>
        <div className="div-content">
            <h1>30% OFF</h1>
            <h4>Fresh Poultry, From Our Farm to Your Home</h4>
            {/* <p>At Farm Nest, we deliver healthy hens and quality eggs you can trust—farm fresh, every time</p> */}
            <p>Welcome to our online poultry shop. We make it easy for you to buy fresh and quality poultry products from the comfort of your home. Here, shopping is easy and stress-free. You don’t need to move from one market to another looking for what you need, Just use few clicks.</p>
            <button><a id='a' href="#products">Shop Now</a></button>
        </div>
      
    </div>
  )
}

export default Landing
