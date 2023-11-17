import React from "react";
import { skills } from "../Projects/projectsList";
import './Skills.css';

function Skills() {
    return (
        <section id="skills">
              <span className="skillTitle">Skills</span>
              <span className="skillDesc">Technology really excites me as it is always changing to improve our futures and how you can utilise your creativity to bring your ideas to life. 
          As someone who really enjoys seeing and learning new things, this is the perfect area to satisfy my big curiosity with all the interesting new technologies while also being able to help people with my work.</span>
              {skills.map((skill) => (
                <div key={skill} className="skillItems">
                  <div className="skillItem">
                    <div className="skillItemText">
                      <h2>{skill.title}</h2>
                      <p>{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
        </section>
      );
}

export default Skills;