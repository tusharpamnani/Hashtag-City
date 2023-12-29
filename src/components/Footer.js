import React from 'react'
import styles from "../stylesheets/Footer.module.css"
import { ReactComponent as ReactLogo } from "../assets/logo.svg"


function Footer() {
  return (
      <footer>
        <div className={styles.logo}><ReactLogo /></div>
        <div>
          <ul className={styles.menu}>
          <li>
            <a href="#home">Instagram</a>
          </li>
          <li>
            <a href="#home">LinkedIn</a>
          </li>
          <li>
            <a href="#home">Facebook</a>
          </li>
          <li>
            <a href="#home">Twitter</a>
          </li>
        </ul>
        </div>
        <button className={styles.hoverToTop} onClick={()=>{window.scrollTo(0,0)}}>scroll to top</button>
      </footer>
  )
}

export default Footer
