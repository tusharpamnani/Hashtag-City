import React from 'react'
import styles from "../stylesheets/Services.module.css"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)
function Services() {

  const screenRef = useRef(null)
  const sliderRef = useRef(null)
  const slide1Ref = useRef()
  const slide2Ref = useRef()
  const slide3Ref = useRef()
  const slide4Ref = useRef()
  // const slide5Ref = useRef()


  useEffect(() => {

    const screen = screenRef.current
    const slide1 = slide1Ref.current
    const slide2 = slide2Ref.current
    const slide3 = slide3Ref.current
    const slide4 = slide4Ref.current

    gsap.fromTo(slide1,
      {
        opacity: "-10",
        transform: "translateX(-100vw)",
      },
      {
        opacity: "1",
        transform: "translateX(0%)",
        duration: 1,
        scrollTrigger: {
          trigger: screen,
          toggleActions: "play reverse restart reverse",
          // markers:true,
          start: "0% top",
          end: "25% top",
        }
      })

    gsap.fromTo(slide2,
      {
        opacity: "-10",
        transform: "translateX(-100vw)",
      },
      {
        opacity: "1",
        transform: "translateX(0%)",
        duration: 1,
        scrollTrigger: {
          toggleActions: "play reverse restart reverse",
          // markers:true,
          trigger: screen,
          start: "25% top",
          end: "50% top",
        }
      })

    gsap.fromTo(slide3,
      {
        opacity: "-10",
        transform: "translateX(-100vw)",
      },
      {
        opacity: "1",
        transform: "translateX(0%)",
        duration: 1,
        scrollTrigger: {
          toggleActions: "play reverse restart reverse",
          // markers:true,
          trigger: screen,
          start: "50% top",
          end: "75% top",
        }
      })
    gsap.fromTo(slide4,
      {
        opacity: "-10",
        transform: "translateX(-100vw)",
      },
      {
        opacity: "1",
        transform: "translateX(0%)",
        duration: 1,
        scrollTrigger: {
          toggleActions: "play reverse restart reverse",
          // markers:true,
          trigger: screen,
          start: "75% top",
          end: "100% top",
        }
      })

  }, [])

  return (
    <>
      <div ref={screenRef} className={styles.screen}>
        <div className={styles.sticky}>
          <div ref={sliderRef} className={styles.slider}>
            <div className={styles.slider}>
              <div ref={slide1Ref} className={styles.display}>
                <div className={styles.textContainer}>
                  <h1 className={styles.title}>Branding & Design</h1>
                  <p>Brand Positioning</p>
                  <p>Visual Identity</p>
                  <p>Graphic Design</p>
                  <p>Print Design</p>
                  <p>Interior Branding</p>
                  <p>Illustrations</p>
                  <p>Design Aesthetics</p>
                  <p>Simplicity</p>
                </div>
              </div>
              <div ref={slide2Ref} className={styles.display}>
                <div className={styles.textContainer}>
                  <h1 className={styles.title}>Digital Strategy & Development</h1>
                  <p>Web Design & Development</p>
                  <p>E - Commerce</p>
                  <p>SEO (Online Optimization)</p>
                  <p>CRO (Conversion Rate Optimization)</p>
                  <p>PPC Advertising</p>
                  <p>Whatsapp Marketing</p>
                  <p>Progressive Strategies</p>
                </div>
              </div>
              <div ref={slide3Ref} className={styles.display}>
                <div className={styles.textContainer}>
                  <h1 className={styles.title}>Content Creation & Advertising</h1>
                  <p>Content Creation & Strategy</p>
                  <p>Copywriting</p>
                  <p>Content Marketing</p>
                  <p>Editing</p>
                  <p>Viral Content Creation</p>
                  <p>Creative Content Concept</p>
                  <p>Advertising Campaigns</p>
                  <p>Out-Of-Home (OOH) Advertising</p>
                </div>
              </div>
              <div ref={slide4Ref} className={styles.display}>
                <div className={styles.textContainer}>
                  <h1 className={styles.title}>Social Media & Marketing</h1>
                  <p>Social Media Marketing</p>
                  <p>Social Campaigns</p>
                  <p>Campaign Setup</p>
                  <p>Audience Targeting</p>
                  <p>Social Media Engagement</p>
                  <p>Influencer Collaboration</p>
                  <p>Trend Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
