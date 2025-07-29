import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import ScrollReveal from "./ScrollReveal";

const Projects = () => {
  const projects = [
    {
      title: "Chronos – Luxury Swiss Watches",
      description:
        "A premium animated landing page showcasing a timeless collection of handcrafted Swiss watches.Built with attention to detail, smooth animations, and elegant design to reflect the true spirit of Swiss precision.",
      technologies: ["React", "CSS", 'Type Script'],
      githubLink: "https://github.com/heshammmsaifff/Chronos-hand-watches",
      liveLink: "https://chronos-hand-watches.vercel.app/",
      image: "/imgs/swiss.png",
    },
    {
      title: "Sprint Code - Company Website",
      description:
        "Sprint Code Services is a dynamic React component that presents a tailored selection of web development offerings. It’s built to support Arabic language and RTL layout, making it ideal for freelancers, small businesses, and startups targeting regional audiences.",
      technologies: ["React", "CSS", 'Java Script'],
      githubLink: "https://github.com/heshammmsaifff/sprint-code",
      liveLink: "https://sprint-code.vercel.app/",
      image: "/imgs/sprint-code.png",
    },
    {
      title: "Task Manager App",
      description:
        "A web application that allows users to track their daily tasks and manage their time effectively. Built with React and Node.js, featuring real-time updates and user authentication.",
      technologies: ["React", "CSS"],
      githubLink: "https://github.com/heshammmsaifff/Task-Manager-App",
      liveLink: "https://task-manager-app-phi-eight.vercel.app/",
      image: "/imgs/task-manager.png",
    },
    {
      title: "Simple Portfolio",
      description:
        "A fully responsive portfolio website showcasing my bio, technical skills, and projects. Built with clean code and modern design principles. Hosted on Vercel.",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/heshammmsaifff/hesham-portfolio",
      liveLink: "https://hesham-portfolio-delta.vercel.app/",
      image: "/imgs/Simple-Portfolio.png",
    },
    {
      title: "To do list",
      description:
        "A minimalistic and responsive to-do list web app that allows users to add, mark, and delete tasks. Built with clean JavaScript and styled using modern CSS techniques.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/heshammmsaifff/to-do-list",
      liveLink: "https://to-do-list-phi-vert.vercel.app/",
      image: "/imgs/To-Do-List.png",
    },
    {
      title: "Pizza Menu",
      description:
        "Developed a dynamic pizza menu web application using React, showcasing component-based architecture, conditional rendering, and responsive design. Implemented reusable components and handled real-time UI updates based on data and time conditions.",
      technologies: ["React", "CSS"],
      githubLink: "https://github.com/heshammmsaifff/pizzas",
      liveLink: "https://pizzas-zeta-woad.vercel.app/",
      image: "/imgs/pizzas.png",
    },
  ];

  return (
    <section id="projects" className="projects">
      <ScrollReveal>
        <h2 className="section-title">
          <span className="accent">03.</span> Some Things I've Built
        </h2>
      </ScrollReveal>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ScrollReveal key={index} width="100%">
            <motion.div
              className="project-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <motion.div
                  className="project-overlay"
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
