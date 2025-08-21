import React from "react";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={darkMode ? "navbar dark" : "navbar"}>
      <h1>My Portfolio</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className="toggle-btn"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;
