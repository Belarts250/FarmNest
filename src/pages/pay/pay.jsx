import React from 'react'
import './pay.css'
import image from  './master.png'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const Pay = () => {
  return (
    <>
    <Navbar/>
      <div className='payment-div'>
      <div className="sub-div-pay gradient-border">
        <img src={image} alt="" />
        <h1>PAY NOW</h1>
        <h2>Payment Methods</h2>
        <p>Money Transfer:</p>
        <p className='pay-p'>
          Making your payment to FarmNest is simple and secure. Just send your payment using the phone number <a href="https://wa.me/250793169027">+250793169027</a>, or <a href="tel:*182*1*1*250793169027%23"> Pay with MTN Mobile Money </a> and once the transaction is complete, kindly take a screenshot of your payment confirmation. Share the screenshot with us via WhatsApp so we can quickly verify and confirm your payment. Your support helps FarmNest grow and continue serving you better . Thank you for choosing to be part of the FarmNest community!
        </p>
         {/* <button>Shop Now</button> */}
      </div>   
    </div>
    <Footer />
    </>

  )
}

export default Pay
