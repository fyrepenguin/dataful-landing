import React from "react";
import { motion } from "framer-motion";

const Header = () => {
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
    <motion.header
      initial="hidden"
      variants={container}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="header-content">
        <div>
          <div>
            {" "}
            <img src="/logo.svg" alt="" />
            <p>A product of Factly</p>
          </div>

          <div>
            <motion.h3 variants={item}>Launching soon... </motion.h3>
            <motion.p variants={item} className="header-description">
              Makes the process of working with public data Easier, Faster &
              Simpler
            </motion.p>
          </div>
          <motion.div variants={item}>
            <p className="input-info">
              For updates & to download a sample dataset
            </p>
            <div className="input-container">
              <input type="email" placeholder="Enter your email" />
              <button>Submit</button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="header-image-container">
        <motion.img variants={item} src="/header.svg" alt="" />
      </div>
    </motion.header>
  );
};

export default Header;
