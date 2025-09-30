import React from "react";
import "./Competitions.css";

export default function Competitions() {
  const competitions = [
    {
      id: 0,
      name: "Kids Programming Marathon",
      loc: "Syria 2019",
      cat: "Adolescence finals",
      ach: "Gold Medal",
      role: "Competitior",
    },
    {
      id: 1,
      name: "World Robot Olympiad",
      loc: "Syria 2019",
      cat: "Regular - Junior",
      ach: "Jury Award",
      role: "Competitior",
    },
    {
      id: 2,
      name: "Syrian Scientific Olympiad",
      loc: "Syria 2021",
      cat: "Informatics",
      ach: "had a place in national finals",
      role: "Competitior",
    },
    {
      id: 3,
      name: "World Robot Olympiad",
      loc: "Syria 2021",
      cat: "Regular - Senior",
      ach: "4th place",
      role: "Competitior",
    },
    {
      id: 4,
      name: "World Robot Olympiad",
      loc: "Syria 2022",
      cat: "Regular - Junior",
      ach: "Bronze medal",
      role: "Coach",
    },
    {
      id: 5,
      name: "Annual Robotics Competition",
      loc: "Syria 2024",
      cat: "Autonomous Robots",
      ach: "3rd place",
      role: "Coach",
    },
    {
      id: 6,
      name: "SPU CPC",
      loc: "Syria 2024",
      ach: "good enough to participate in national competition",
      role: "Competitior",
    },
    {
      id: 7,
      name: "SCPC",
      loc: "Syria 2024",
      role: "Competitior",
    },
  ];
  return (
    <div className="comp-container" id="competitions">
      <h1 className="comp-title">Achievements</h1>
      <div className="comp-grid">
        {competitions.map((comp) => (
          <div key={comp.id} className="comp-card">
            <h3 className="comp-name">{comp.name}</h3>
            <p className="comp-loc">{comp.loc}</p>
            {comp.cat && <p className="comp-cat"> {comp.cat}</p>}
            {comp.ach && <p className="comp-ach">{comp.ach}</p>}
            <p className="comp-role"> {comp.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
