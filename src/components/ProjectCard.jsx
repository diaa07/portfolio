import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.img} alt={project.name} />
      <h2 className="project-name">{project.name}</h2>
      <div className="skills-container">
        {project.skills.map((skill, index) => (
          <span key={index} className="skill-label">
            {skill}
          </span>
        ))}
      </div>
      <div className="links-container">
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          Demo ↗️
        </a>
        <a href={project.code} target="_blank" rel="noopener noreferrer">
          Code 🛠️
        </a>
      </div>
    </div>
  );
}
