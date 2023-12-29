import styles from "../stylesheets/ImageBanner.module.css"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function ImageBanner(props) {
  const screenRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null)

  useEffect(() => {
    const image = imageRef.current;
    const screen = screenRef.current;
    const text = textRef.current

    gsap.fromTo(screen, {
      backgroundColor: "white",
    }, {
      duration: 3,
      scrollTrigger:{
        trigger:screen,
        start:"top 10%",
        end:"bottom bottom"
      },
      backgroundColor: "black"
    })

    gsap.fromTo(text, {
      display:"none",
      opacity:"0"
    }, {
      scrollTrigger: {
        trigger: screen,
        start: "top top",
        end: "bottom top",
      },
      display:"flex",
      opacity:"1",
      duration:5
    })

    gsap.fromTo(screen, {
      scrollTrigger: {
        trigger: screen,
        start: "top top",
        end: "bottom top",
      },
      backgroundColor:"white"
    }, {
      scrollTrigger: {
        trigger: screen,
        start: "top top",
        end: "bottom top",
      },
      reversed:true,
      backgroundColor:"black"
    })

    gsap.fromTo(image, {
      scrollTrigger: {
        trigger: screen,
        start: "top top",
        scrub: true,
        end: "bottom top",
      },
      filter: "brightness(1)"
    }, {
      scrollTrigger: {
        trigger: screen,
        start: "top top",
        scrub: true,
        end: "bottom top",
      },
      filter: "brightness(0.1)"
    })
  }, []);


  return (
    <>
      <div ref={screenRef}  className={styles.screen}>
        <div className={styles.screenContent}>
          <div ref={imageRef} className={styles.banner}></div>
          <div ref={textRef} className={styles.textBox}>
                <h3>Lorem, ipsum dolor.</h3>
                <h1>
                  <span>A</span><span>E</span><span>R</span><span>A</span><span>T</span><span>E</span>
                </h1>
              </div>
        </div>
      </div>

    </>
  )
}

export default ImageBanner
