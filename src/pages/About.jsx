import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">More About Me</h1>

      <div className="about-grid">
        <div className="about-card">
          <h2 className="card-title">Hobbies</h2>
          <ul className="list">
            <li>Coding</li>
            <li>Chess</li>
            <li>Walking</li>
            <li>Swimming</li>
          </ul>
        </div>

        <div className="about-card">
          <h2 className="card-title">Why Me?</h2>
          <ul className="list">
            <li>Problem solver</li>
            <li>Teamworker</li>
            <li>Nonstop dreamer</li>
            <li>Passionate</li>
          </ul>
        </div>
      </div>

      <div className="links-section">
        <h2 className="section-title">My Accounts</h2>
        <div className="link-buttons">
          <a
            href="https://codeforces.com/profile/binLaggin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codeforces ↗️
          </a>
          <a
            href="https://github.com/diaa07"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗️
          </a>
        </div>

        <h2 className="section-title">Contact Me</h2>
        <div className="link-buttons">
          <a
            href="https://wa.me/963992888155"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp 📞
          </a>
          <a
            href="https://t.me/ThaCodeFather"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram ✉️
          </a>
        </div>
      </div>
    </div>
  );
}
