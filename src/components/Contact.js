import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 300 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      variants={container}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="contact-section"
    >
      <div className="contact-image-container">
        <motion.img variants={item} src="/contact.svg" alt="" />
      </div>
      <div className="contact-content">
        <motion.form action="" variants={item}>
          <div>
            <label htmlFor="first_name">
              First Name
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="First Name"
              />
            </label>
            <label htmlFor="last_name">
              Last Name
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Last Name"
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email address"
              />
            </label>
          </div>
          <div>
            <label htmlFor="message">
              Message
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
              />
            </label>
          </div>

          <div className="terms">
            <input type="checkbox" name="privacy" id="privacy" />
            <label htmlFor="privacy">
              You agree to our friendly privacy policy.
            </label>
          </div>

          <button>Send Message</button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
