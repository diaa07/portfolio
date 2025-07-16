import React from "react";
import "./ProjectCard.css";
import Tilt from "react-parallax-tilt";

export default function ProjectCard({ project }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.15}
      glareColor="#ffffff"
      glarePosition="all"
      scale={1.04}
      transitionSpeed={200}
    >
      <div className="project-card">
        <img src={project.img} alt="project image" />
        <div className="lower-sec">
          <div className="project-name">{project.name}</div>
          <div className="skills-container">
            {project.skills.map((skill) => {
              return (
                <div key={skill} className="skill-label">
                  {skill}
                </div>
              );
            })}
          </div>
          <div className="links-container">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Demo↗️
            </a>
            <a href={project.code} target="_blank" rel="noopener noreferrer">
              Code↗️
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
