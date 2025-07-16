import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Competitions from "./pages/Competitions";
import About from "./pages/About";
import Splash from "./components/Splash";
import Navbar from "./components/NavBar";

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => setShowContent(true), 300);
    }
  }, [loading]);

  return (
    <>
      {loading && <Splash onFinish={() => setLoading(false)} />}
      <Navbar />
      <div
        className={`main-content ${loading ? "hidden" : "fade-in"} ${
          showContent ? "show" : ""
        }`}
      >
        <div id="home">
          <Home />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="competitions">
          <Competitions />
        </div>
        <div id="about">
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
