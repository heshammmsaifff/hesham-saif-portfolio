import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Responsive Design"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <ScrollReveal>
        <h2 className="section-title">
          <span className="accent">02.</span> Skills
        </h2>
      </ScrollReveal>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <ScrollReveal key={index} width="100%">
            <motion.div
              className="skill-category"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
