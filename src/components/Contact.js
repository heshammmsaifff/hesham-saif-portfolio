import React from "react";
import "./Contact.css";
import ScrollAnimation from "./ScrollAnimation";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <ScrollAnimation>
        <h2 className="section-title">
          <span className="accent">04.</span> What's Next?
        </h2>
      </ScrollAnimation>
      <ScrollAnimation>
        <h3 className="contact-title">Get In Touch</h3>
      </ScrollAnimation>
      <ScrollAnimation>
        <p className="contact-description">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>
      </ScrollAnimation>
      <div className="contact-links">
        <a href="mailto:heshamsaif856@gmail.com" className="contact-button">
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
