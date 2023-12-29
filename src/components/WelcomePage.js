import React, { useEffect, useRef, useState } from 'react'
import styles from "../stylesheets/WelcomePage.module.css"

function WelcomePage(props) {
  return (
    <div className={styles.poster} >
      <h2 className={styles.workLine}>Design <span>.</span> Create <span>.</span> Display</h2>
      <h1 className={styles.motto}style={{animationDelay:"0.1s"}} >BUILDER OF</h1>
      <h1 className={styles.motto}style={{animationDelay:"0.2s"}} >GRACEFUL DIGITAL</h1>
      <h1 className={styles.motto} style={{animationDelay:"0.3s"}}>STORIES</h1>
    </div>
  )
}

export default WelcomePage
