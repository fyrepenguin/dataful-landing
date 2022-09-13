import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
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
      className="intro-section"
      initial="hidden"
      variants={container}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="intro-image-container">
        <motion.img variants={item} src="/intro.png" alt="" />{" "}
      </div>
      <div className="intro-content">
        <motion.h2 variants={item}>
          A Data <span>Ecosystem</span>
        </motion.h2>
        <motion.p variants={item}>
          Dataful is a comprehensive data ecosystem providing clean and
          ready-to-use datasets on India, and integrating various other data
          initiatives DataMaps, DataSheets, Dashboards, Know Your Sources,
          Counting India, and DataByte
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Intro;
