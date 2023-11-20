import React from "react";
import Pulse from "react-reveal/Pulse";
import { skills } from "../Projects/projectsList";
import './Skills.css';

function Skills() {
    return (
        <section id="skills">
              <span className="skillTitle">Skills</span>
              <span className="skillDesc">Technology really excites me as it is always changing to improve our futures and how you can utilise your creativity to bring your ideas to life. </span>
              {skills.map((skill) => (
                <Pulse duration={500} delay={1000}>
                <div key={skill} className="skillItems">
                  <div className="skillItem">
                    <div className="skillItemText">
                      <h2>{skill.title}</h2>
                      <p>{skill.description}</p>
                    </div>
                  </div>
                </div>
                </Pulse>
              ))}
              
        </section>
      );
}

export default Skills;