import React from "react";
import "./Skills.css";

export default function Skills() {
  const skillsArray = [
    "HTMl",
    "CSS",
    "JavaScript",
    "React.js",
    "MongoDB",
    "C++",
    "Arduino",
    "Lego EV3",
    "API's",
  ];
  const learningArray = [
    "Express.js",
    "JAVA ",
    "SQl",
    "React TipTap",
    "TailWind CSS",
  ];

  return (
    <div className="skills">
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
          <div className="head">Learning</div>
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
