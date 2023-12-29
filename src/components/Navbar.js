import React, { useState, useRef } from 'react'
import styles from "../stylesheets/Navbar.module.css"
import { ReactComponent as ReactLogo } from "../assets/logo.svg"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger)


function Navbar(props) {
  const menuRef = useRef()
  const inversion = props.inversion
  const [show, setShow] = useState(true)
  var value = inversion ? 0 : 1

  const handleShow = () => {
    setShow(!show)
    if (show) {
      menuRef.current.classList.add(styles.cross)
    } else {
      menuRef.current.classList.remove(styles.cross)
    }

  }



  return (
    <>
      <div ref={menuRef} onClick={handleShow} className={styles.body}>
        {window.innerWidth>650 ? <div style={{ filter: `invert(${!show?0:value})` }} className={styles.logo}><ReactLogo /></div>:<div style={{ filter: `invert(${1})` }} className={styles.logo}>{!show?<ReactLogo />:<></>}</div>}
        <div style={{ filter: `invert(${value})` }} ref={menuRef} className={styles.menuButton}><hr />
          <hr />
          <hr /></div>
      </div>
      {!show && <div className={styles.navContainer}>
        <h1><Link to= "/">Home</Link></h1>
        <h1><Link to= "/projects">Projects</Link></h1>
        <h1><Link to= "/contact">Contact Us</Link></h1>
      </div>}
    </>
  )
}

export default Navbar
