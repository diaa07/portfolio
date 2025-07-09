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
          <h1 className="salam">السلام عليكم</h1>
          <h2 className="name">Diaa Aldin Drak Alsebai</h2>
          <div className="bio">
            {" "}
            <Typewriter
              options={{
                strings: [
                  "Programming lover",
                  "inspired by tea ☕",
                  "and built for greatness 🔥",
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
