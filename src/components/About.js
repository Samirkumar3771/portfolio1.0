import React from "react";
import AboutPic from "../assets/img.jpg";


function AboutMe() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={AboutPic} alt="Profile" />
        </div>
        <div className="about-content">
          <h2>👋 About Me</h2>
          <p>
            Hi, I’m <span className="highlight"></span>, a passionate 
            <strong> Full-Stack Developer</strong> with expertise in building 
            modern web applications, responsive designs, and interactive UIs. 
            I love exploring new technologies, solving problems, and turning 
            ideas into reality. 🚀
          </p>
          <p>
            With experience in <strong>React, Java, Python, and Cloud Tech</strong>, 
            I aim to create impactful projects that make a difference. 🌍
          </p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
