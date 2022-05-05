import React from 'react'
import Footer from '../components/Footer/Footer'

import Navbar from '../components/Navbar/Navbar'

function WorkerLayout({props, children}) {
  return (
      <>
      <Navbar/>
     
      <div>{children}</div>
      <Footer/>
      </>
   
  )
}

export default WorkerLayout