import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import WorkingHours from './WorkingHours'
import Footer from './Footer'

const MainLayout = () => {
    useEffect(() => {
        document.title = "Astra Fades"
     }, []);
  return (
    <div>
        <title>Astra Fades</title>
        <Navbar/>
        <Hero />
        <About />
        <WorkingHours />
        <Footer/>
    </div>
  )
}

export default MainLayout