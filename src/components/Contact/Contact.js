import React from "react";
import './Contact.css';

function Contact() {
  return (
      <section id="contact" className="contactPage">
        <div id="contact">
          <h1 className="contactTitle">Contact Me</h1>
          <span className="contactDesc">Please fill out the form below if you would like to contact me.</span>
          <form className="contactForm">
            <input type="text" className="name" placeholder="Your Name"/>
            <input type="email" className="email" placeholder="Your Email" />
            <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
            <button type="submit" value="send" className="submitBtn">Submit</button>
          </form>
        </div>
      </section>
    );
}

export default Contact;