import React from "react";
import Skills from "./Skills";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Movie app",
      Skills: ["React", "JS", "Responsive Design", "TMDB API", "Color themes"],
      img: "https://i.ibb.co/DHbWPygf/Screenshot-2025-07-09-015406.png",
      code: "https://github.com/diaa07/movie-app",
      demo: "https://diaa07.github.io/movie-app/",
    },
    {
      id: 2,
      name: "Prayer Times App",
      Skills: ["React", "JS", "Adhan API"],
      img: "https://i.ibb.co/dwj6jY15/Screenshot-2025-07-09-015913.png",
      code: "https://github.com/diaa07/prayer-times-app",
      demo: "https://diaa07.github.io/prayer-times-app/",
    },
    {
      id: 3,
      name: "Rock Paper Scissors",
      Skills: ["React", "JS"],
      img: "https://i.ibb.co/5xBW2cSg/Screenshot-2025-07-09-015727.png",
      code: "https://github.com/diaa07/rock-paper-scissors-game",
      demo: "https://diaa07.github.io/rock-paper-scissors-game/",
    },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}
