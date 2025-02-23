import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Contact from './Contact'

function Body() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Contact />
    <Footer/>
      
    </>
  )
}

export default Body
