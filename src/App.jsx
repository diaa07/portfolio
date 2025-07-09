import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Competitions from "./pages/Competitions";
import About from "./pages/About";
import Splash from "./components/Splash";
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Splash onFinish={() => setLoading(false)} />}
      <div className={`main-content ${loading ? "hidden" : "fade-in"}`}>
        <Home />
        <Skills />
        <Projects />
        <Competitions />
        <About />
      </div>
    </>
  );
}
export default App;
