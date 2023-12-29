import React from "react";
import styles from "../stylesheets/Contact.module.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aou2du9",
        "template_mkj6j54",
        form.current,
        "Jw9B0qYMOy8tuS3JP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id={styles.contact}>
      <div className={styles.heading}>
        <h3>
          Let's craft a brand that turns heads <br />
          Let's elevate your brand. 
        </h3>
        <h2>LET'S WORK TOGETHER</h2>
      </div>

      <div className={styles.container}>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className={styles.btn}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
