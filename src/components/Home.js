import React from "react";
import { motion } from "framer-motion";
import AboutPic from "../assets/img.jpg";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="home-text"
        >
          <h1>👋 Hi, I'm <span className="highlight">sam</span></h1>
          <h2>Aspiring <span className="highlight">Full-Stack Developer</span></h2>
          <p>
            Passionate about building modern web apps, solving problems,
            and creating interactive user experiences 🚀
          </p>
         
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="home-image"
        >
          <img
            src={AboutPic}
            alt="profile"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
