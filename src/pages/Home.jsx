import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import personal from "../assets/profile.png";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="left-section">
          <div className="circle">
            <img src={personal} alt="Diaa" className="profile-image" />
          </div>
        </div>
        <div className="right-section">
          <h1 className="salam">Hello, I'm Diaa!</h1>
          <h2 className="name">Diaa Aldin Alsebai</h2>
          <div className="bio">
            {" "}
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer (React)",
                  "Figma to Code Implementation",
                  "Problem Solving Specialist",
                  "Building Modern UIs",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 30,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
