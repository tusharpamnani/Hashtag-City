import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from "../components/Footer"
import About from '../components/About'
function ContactUsPage() {
  return (
    <>
      <div style={{backgroundColor:"black",height:"100vh",width:"100vw"}} >
        <Navbar />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default ContactUsPage
