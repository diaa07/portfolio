import React from "react";
import "./Skills.css";
export default function Skills() {
  const skillsArray = [
    "HTMl",
    "CSS",
    "JavaScript",
    "React.js",
    "API's",
    "Git/GitHub",
    "Figma",
    "Responsive Design",
    "MongoDB",
  ];
  const learningArray = [
    "Express.js",
    "Redux/Zustand",
    "TypeScript",
    "TailWind CSS",
  ];
  return (
    <div className="skills" id="skills">
      <div className="upper-part">Frontend Developer</div>
      <div className="lower-part">
        <div className="left-sec">
          <div className="head">Skills</div>
          <div className="cont">
            {skillsArray.map((skill) => (
              <div key={skill} className="skill-label">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="right-sec">
          <div className="head">Learning / Next Steps</div>
          <div className="cont">
            {learningArray.map((skill) => (
              <div key={skill} className="skill-label">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
