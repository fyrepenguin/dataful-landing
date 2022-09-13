import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <img src="/logo-white.svg" alt="" />
        </div>
        <div>
          <p>© {new Date().getFullYear()} Factly, Inc. All rights reserved.</p>
        </div>
        <div className="social-icons">
          <a
            href="https://twitter.com/factlyindia"
            target="_blank"
            title="Follow us on Twitter"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com/factlyindia"
            target="_blank"
            title="Follow us on Facebook"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com/factly"
            target="_blank"
            title="Follow us on Linkedin"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/factly"
            target="_blank"
            title="Follow us on Github"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
