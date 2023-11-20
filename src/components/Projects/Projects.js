import React from "react";
import Pulse from "react-reveal/Pulse";
import Project1 from '../../assets/portfolio-1.jpg';
import Project2 from '../../assets/portfolio-2.jpg';
import Project3 from '../../assets/portfolio-3.jpg';
import Todolist from '../../assets/todolist.jpg';
import './Projects.css';

function Projects() {
    return (
        <section id="projects">
              <h1 className="projectsTitle">
                Apps I've Built
              </h1>
              <span className="projectsDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                fuga dolore.
              </span>   
            <div className="projectItems">
              <Pulse duration={500} delay={300}><img src={Todolist} alt="todolist" className="projectImg" /></Pulse>
              <Pulse duration={500} delay={600}><img src={Project1} alt="project1" className="projectImg" /></Pulse>
              <Pulse duration={500} delay={900}><img src={Project2} alt="project2" className="projectImg" /></Pulse>
              <Pulse duration={500} delay={1200}><img src={Project3} alt="project3" className="projectImg" /></Pulse>
            </div>
            
        </section>
    );
}

export default Projects;