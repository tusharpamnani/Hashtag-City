import React, { useEffect, useRef, useState } from 'react'
import styles from "../stylesheets/About.module.css"
import arrowLeft from "../assets/Arrow 2.png"
import arrowRight from "../assets/Arrow 3.png"
import gsap from 'gsap'


function About(props) {

  const rotatingElementRef = useRef(null);
  const [i, setI] = useState(0)
  const [currentRotation, setCurrentRotation] = useState(70);

  useEffect(() => {
    gsap.to(rotatingElementRef.current, {
      transform: `translate(0,${currentRotation}%)`,
      duration: 0.5,
    });
  }, [])

  const translateUp = () => {
    var newTranslate = (currentRotation + 47) % 100;
    gsap.to(rotatingElementRef.current, {
      transform: `translate(0,${newTranslate}%)`,
      duration: 0.5,
    });
    setCurrentRotation(newTranslate);
  };

  const translateDown = () => {
    var newTranslate = (currentRotation - 47) % 100;
    gsap.to(rotatingElementRef.current, {
      transform: `translate(0,${newTranslate}%)`,
      duration: 0.5,
    });
    setCurrentRotation(newTranslate);
  };

  const ourVisionData = [
    { index: 0, title: "FROM START TO FINISH", content: "We provide value to our clients through design thinking and customized design solutions. We closely engage with CEOs and leaders, expediting project insights and outcomes." },
    { index: 1, title: "DRIVEN BY INSIGHTS", content: "We truly believe that good research leads to effective design, robust tech stacks and tailor-made outcomes. Powerful concepts are driven by stirring insights." },
    { index: 2, title: "POWERED BY CREATIVITY", content: "At Hashtag City, creativity is what drives the agency. It manifests itself through our management approach, creation space and technological advancement. This is why each project is unique, just like your brand." },
    { index: 3, title: "OBSESSED WITH RESULTS", content: "We develop digital solutions, platforms and content that have a real impact for our clients. We firmly believe that creating tailor-made digital solutions is essential to the success of tomorrow's thriving businesses." },
  ]

  const lineRef = useRef(null)

  const handleLeft = () => {
    translateUp()
    if (i === 0) {
      setI(i + 3)
    } else {
      setI(i - 1)
    }
    lineRef.current.classList.add(styles.appearFromRight)
    setTimeout(() => {
      lineRef.current.classList.remove(styles.appearFromRight)
    }, 1000);
  }

  const handleRight = () => {
    translateDown()
    lineRef.current.classList.add(styles.appearFromLeft)
    setTimeout(() => {
      lineRef.current.classList.remove(styles.appearFromLeft)
    }, 1000);
    setI((i + 1) % 4);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainHeading}>
          <span>Our</span>
          <h1>VISI
            <div className={styles.spikedCircle}>
              <hr />
              <hr />
              <hr />
              <hr />
            </div>
            N
          </h1>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.leftSection}>
            <div className={styles.numberBox}>
              <div ref={rotatingElementRef} className={styles.slider}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.topBar}>
              {i===0?<h1 className={styles.heading}>{ourVisionData[i].title}</h1>:<></>}
              {i===1?<h1 className={styles.heading}>{ourVisionData[i].title}</h1>:<></>}
              {i===2?<h1 className={styles.heading}>{ourVisionData[i].title}</h1>:<></>}
              {i===3?<h1 className={styles.heading}>{ourVisionData[i].title}</h1>:<></>}
              <div className={styles.arrowBox}>
                <button disabled = {i === 0} onClick={handleLeft} alt=""><img src={arrowLeft} alt="" /></button>
                <button disabled = {i === 3} onClick={handleRight} alt="" ><img src={arrowRight}  alt="" /></button>
              </div>
            </div>
            <hr ref={lineRef} />
            {i === 0?<p>{ourVisionData[i].content}</p>:<></>}
            {i === 1?<p>{ourVisionData[i].content}</p>:<></>}
            {i === 2?<p>{ourVisionData[i].content}</p>:<></>}
            {i === 3?<p>{ourVisionData[i].content}</p>:<></>}
          </div>
        </div>
      </div>
    </>

  )
}

export default About
