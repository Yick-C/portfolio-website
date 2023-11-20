import React from "react";
import { Fade } from "react-reveal";
import './About.css';
import codeImg from '../../assets/coding.png';

function About() {
    return (
    <section id="about">
      <div className="aboutContent">
      <Fade top>
        <span className="hello">Hello, </span>
      </Fade>
      <Fade delay={500}>
        <span className="introText">I'm <span className="introName">Christina</span><br />Software Engineer</span>
      </Fade>
      <Fade delay={800}>
        <p className="introPara">Passionate about creating innovative solutions that elevate user experiences to new heights. </p>
      </Fade>
      </div>
      <Fade duration={800}>
        <img src={codeImg} alt="problem-solving" className="aboutImg"/>
        <a className="credit" href="https://www.flaticon.com/free-stickers/technology" title="technology stickers">Flaticon</a>
      </Fade>
    </section>
    )

}

export default About;