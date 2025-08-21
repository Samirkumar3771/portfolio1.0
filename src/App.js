import React, { useState } from "react";
import { HashRouter } from "react-router-dom"; // ✅ Import HashRouter
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    // ✅ Wrap everything in HashRouter
    <HashRouter>
      <div className={darkMode ? "dark" : ""}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
