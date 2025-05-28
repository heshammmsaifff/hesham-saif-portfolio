import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="hero-greeting">Hi, my name is</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h1 className="hero-title">
          <span className="hero-name">Hesham</span>
          <br />
          <span className="hero-tagline">I build things for the web.</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="hero-description">
          Front-End Developer with a strong background in HTML, CSS, and
          JavaScript. Passionate about creating responsive and user-friendly web
          applications. Currently enhancing skills in React.js and modern
          front-end tools.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="hero-cta">
          <a href="#projects" className="cta-button">
            Check out my work!
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
