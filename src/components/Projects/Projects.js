import React from "react";
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
              <img src={Todolist} alt="todolist" className="projectImg" />
              <img src={Project1} alt="project1" className="projectImg" />
              <img src={Project2} alt="project2" className="projectImg" />
              <img src={Project3} alt="project3" className="projectImg" />
            </div>
        </section>
    );
}

export default Projects;