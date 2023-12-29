import React from 'react'
import Navbar from '../components/Navbar'
import WelcomePage from '../components/WelcomePage'
import ImageBanner from '../components/ImageBanner'
import Services from '../components/Services'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import { useState } from 'react'
import About from '../components/About'


function HomePage() {

    const [scroll, setScroll] = useState(0)

    window.addEventListener("scroll", (e) => {
        setScroll(window.scrollY)
    })

    const value = window.innerHeight
    const inversion = scroll > value ? false : true

    return (
        <>
            <Navbar inversion={inversion} />
            <WelcomePage />
            <ImageBanner />
            <About/>
            <Services />
            <Slider />
            <Footer />
        </>
    )
}

export default HomePage
