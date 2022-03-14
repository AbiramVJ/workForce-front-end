import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function HomeLayout({props, children}) {
  return (
    <div>
        <Navbar/>
        <div>{children}</div>
        <Footer/>
        
    </div>
  )
}

export default HomeLayout