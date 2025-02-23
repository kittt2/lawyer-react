import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Contact from './Contact'
import ScrollToTop from './Scroll'
function Body() {
  return (
    <>
    <ScrollToTop />
    <Navbar/>
    <Outlet/>
    <Contact />
    <Footer/>
      
    </>
  )
}

export default Body
