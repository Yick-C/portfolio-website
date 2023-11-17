import React from "react";
import './About.css';

function About() {
    return (
    <section id="about">
    <div className="aboutContent">
      <span className="hello">Hello, </span>
      <span className="introText">I'm <span className="introName">Christina</span><br />Software Engineer</span>
      <p className="introPara">Passionate about creating innovative solutions that elevate user experiences to new heights. </p>
    </div>
    </section>
    )

}

export default About;