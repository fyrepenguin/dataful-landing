import React from "react";
import { motion } from "framer-motion";

const Features = () => {
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
      className="features-section"
      initial="hidden"
      variants={container}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 variants={item}>
        Why <span>Dataful</span>?
      </motion.h2>
      <div className="features-container">
        <motion.div variants={item}>
          <div className="feature-image-container">
            <img src="/easy.svg" alt="" />
          </div>
          <div>
            <h3>Easy-to-use</h3>
            <p>
              Searching & downloading the relevant datasets on the portal is as
              easy & simple as using a search engine like Google.{" "}
            </p>
          </div>
        </motion.div>
        <motion.div variants={item}>
          <div className="feature-image-container">
            <img src="/affordable.svg" alt="" />
          </div>
          <div>
            <h3>Affordable</h3>
            <p>
              The license cost for one license comes to around 150 USD/year
              (i.e. less than 15 USD/month) if one takes 10 licenses.
            </p>
          </div>
        </motion.div>
        <motion.div variants={item}>
          <div className="feature-image-container">
            <img src="/saves-time.svg" alt="" />
          </div>
          <div>
            <h3>Saves time</h3>
            <p>
              It helps save valuable time as it reduces the duplication of
              efforts by multiple organisations and offers a one-stop solution
              for clean and ready-to-use datasets covering 50+ sectors
            </p>
          </div>
        </motion.div>
        <motion.div variants={item}>
          <div className="feature-image-container">
            <img src="/community.svg" alt="" />
          </div>
          <div>
            <h3>Creates a Community</h3>
            <p>
              Dataful also aims to create a data journalism community in the
              Indian media ecosystem by organizing events and enabling
              interaction.
            </p>
          </div>
        </motion.div>
        <motion.div variants={item}>
          <div className="feature-image-container">
            <img src="/standardised.svg" alt="" />
          </div>
          <div>
            <h3>Standardised</h3>
            <p>
              The datasets on the portal are properly cleaned and standardised.
              Hence, it becomes effortless for people to understand and work on
              different datasets available on the portal and combining multiple
              datasets without the hassle of reworking.
            </p>
          </div>
        </motion.div>
        <motion.div variants={item}>
          <div className="feature-image-container">
            <img src="/more.svg" alt="" />
          </div>
          <div>
            <h3>More than a ‘Data Portal’</h3>
            <p>
              Dataful not only provides datasets like any other data portal but
              also helps the user with ideas for data stories, the context &
              understanding of the data, and related use cases for a
              comprehensive understanding.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Features;
