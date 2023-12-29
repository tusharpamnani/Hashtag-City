import React, { useState, useRef } from "react";
import styles from "../stylesheets/Projects.module.css";
import img1 from "../assets/web1.jpg";
import img2 from "../assets/web2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles2 from "../App.module.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const imageList = [
    { src: img1, name: "CCFD Terre solidaire" },
    { src: img2, name: "Les Others" },
    { src: img3, name: "Wood and Mary" },
    { src: img4, name: "Globe 3D" },

    // Add more images with unique names as needed
  ];

  const [imageTransforms, setImageTransforms] = useState(Array(imageList.length).fill(""));
  const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
  const PERSPECTIVE = 800; // Decreased perspective value
  const SCALE = 1.03; // Decreased scaling value
  const ROTATION_FACTOR = 3; // Adjust the rotation factor

  function handleHover(e, index) {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (ROTATION_FACTOR - horizontal * (ROTATION_FACTOR * 2)).toFixed(2);
    const rotateY = (vertical * (ROTATION_FACTOR * 2) - ROTATION_FACTOR).toFixed(2);

    const newImageTransforms = [...imageTransforms];
    newImageTransforms[index] = `perspective(${PERSPECTIVE}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale(${SCALE})`;

    setImageTransforms(newImageTransforms);
  }

  function resetStyles(index) {
    const newImageTransforms = [...imageTransforms];
    newImageTransforms[index] = "";

    setImageTransforms(newImageTransforms);
  }


  const pageRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(pageRef.current, {
      backgroundColor: "white",
      color:"black"
    }, {
      backgroundColor: "black",
      color:"beige",
      scrollTrigger: {
        trigger: pageRef.current,
        start: "20% top",
        end: "40% top",
        toggleActions: "play none reverse none",
      }
    })
  }, [])

  return (
    <>
      <div ref={pageRef} className={styles.page}>
        <Navbar />
        <div className={styles.projects}>
          <h1>Our Projects</h1>
        </div>
        <div className={styles.cards}>
          {imageList.map((image, index) => (
            <div className={styles.image_container} key={index}>
              <img
                src={image.src}
                alt={image.name}
                className={styles.card}
                style={{ transform: imageTransforms[index] }}
                onMouseMove={motionMatchMedia.matches ? undefined : (e) => handleHover(e, index)}
                onMouseLeave={motionMatchMedia.matches ? undefined : () => resetStyles(index)}
              />
              <div className={styles.image_name}>{image.name}</div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
