import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a
            href="https://github.com/heshammmsaifff"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="footer-text">
          <p>
            Designed & Built by <span className="hesham">Hesham</span>{" "}
          </p>
          <p className="copyright">© All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
