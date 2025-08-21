import React from "react";

function Projects() {
  return (
    <section id="projects">
      <h2 className="projects-title">🚀 My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>🌐 Portfolio Website</h3>
          <p>A sleek personal website built with React & CSS animations.</p>
          <a href="#" className="btn">View Project</a>
        </div>
        <div className="project-card">
          <h3>📱 Mobile App</h3>
          <p>A cross-platform app with modern UI and API integration.</p>
          <a href="#" className="btn">View Project</a>
        </div>
        <div className="project-card">
          <h3>⚡ AI Tool</h3>
          <p>An AI-powered tool with real-time predictions and insights.</p>
          <a href="#" className="btn">View Project</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
