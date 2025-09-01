import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Landing from '../../Components/Landing/Landing'
import About from '../../Components/About/About'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Landing />
        <About />
        <Footer />
    </div>
  )
}

export default Home
