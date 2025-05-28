import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">
        <span className="accent">01.</span> About Me
      </h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! My name is Hesham Saif, and I enjoy creating things that live
            on the internet. My interest in web development started back in 2021
            when I decided to try customizing various web platforms — turns out
            hacking together custom themes taught me a lot about HTML & CSS!
          </p>

          <p>
            Fast-forward to today, and I've had the privilege of working at
            front end web development. My main focus these days is building
            accessible, inclusive products and digital experiences for a variety
            of clients.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="about-image">
          <div className="image-wrapper">
            <img src="/imgs/H.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
