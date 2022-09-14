import React from "react";
import { motion } from "framer-motion";

const Difference = () => {
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
      className="difference-section"
    >
      <motion.h2 variants={item}>
        How is <span>Dataful</span> different from other data portals?
      </motion.h2>
      <div className="differences-container">
        <motion.div variants={item} className="difference">
          <div className="image-container">
            <img src="/user-centric.svg" alt="" />
          </div>
          <h4>User-centric</h4>
          <p>Focus on the relevance of datasets to the user</p>
        </motion.div>
        <motion.div variants={item} className="difference">
          <div className="image-container">
            {" "}
            <img src="/database.svg" alt="" />
          </div>
          <h4>Huge Database</h4>
          <p>
            We are starting with more than 10,000 important & high value
            datasets
          </p>
        </motion.div>
        <motion.div variants={item} className="difference">
          <div className="image-container">
            {" "}
            <img src="/diverse-areas.svg" alt="" />
          </div>
          <h4>Diverse areas</h4>
          <p>50+ sectors covered</p>
        </motion.div>
        <motion.div variants={item} className="difference">
          <div className="image-container">
            {" "}
            <img src="/comprehensive.svg" alt="" />{" "}
          </div>
          <h4>Comprehensive</h4>
          <p>
            Combines various initiatives along with the availability of datasets
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Difference;
