import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Competitions from "./pages/Competitions";
import About from "./pages/About";
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Splash onFinish={() => setLoading(false)} />}
      <Navbar />
      <div className={`main-content ${loading ? "hidden" : "fade-in"}`}>
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
