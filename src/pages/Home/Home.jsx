import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Landing from '../../Components/Landing/Landing'
import About from '../../Components/About/About'
import ExploreMenu from '../../Components/Exploremenu/Exploremenu'
import PoultryDisplay from '../../Components/Poultrydisplay/Poultrydisplay'
import { useState } from 'react'

const Home = () => {
    const [category,setCategory] = useState("All");
  return (
    <div>
        <Navbar />
        <Landing />
        <About />
        <ExploreMenu category={category} setCategory={setCategory}/>
        <PoultryDisplay category={category}/>
        <Footer />
    </div>
  )
}

export default Home
