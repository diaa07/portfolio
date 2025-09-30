// [file name]: App.js (أو App.jsx)
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Competitions from "./pages/Competitions";
import About from "./pages/About";
import Splash from "./components/Splash";
import "./App.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // مدة انتظار أطول قليلاً للسماح لتأثير الكتابة بالعمل
    const splashDuration = 4000;
    const fadeOutDelay = 500;

    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, splashDuration);

    // Intersection Observer API
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const elementsToAnimate = document.querySelectorAll(
      "section, .fade-in, .comp-card, .project-card, .about-card, .link-buttons a"
    );

    const observerTimeout = setTimeout(() => {
      elementsToAnimate.forEach((el) => observer.observe(el));
    }, splashDuration + fadeOutDelay);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(observerTimeout);
      elementsToAnimate.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <Splash className={!showSplash ? "hidden" : ""} />

      <div className={`main-content ${showSplash ? "hidden" : ""}`}>
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <section id="skills" className="fade-in">
          <Skills />
        </section>
        <section id="projects" className="fade-in">
          <Projects />
        </section>
        <section id="competitions" className="fade-in">
          <Competitions />
        </section>
        <section id="about" className="fade-in">
          <About />
        </section>
      </div>
    </div>
  );
}

export default App;
