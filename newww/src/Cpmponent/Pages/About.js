import React from "react";
import { motion, Variants } from "framer-motion";

const About = () => {
  let DEMO: Variants = {
    hide: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5, 
        duration: 1,
      },
    },
  };
  return (
    <motion.div variants={DEMO} initial="hide" animate="show">
      <motion.h1
        style={{ fontSize: 50, textAlign: "center", marginTop: 100 }}
        variants={DEMO}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit
      </motion.h1>

      <motion.h1 style={{ fontSize: 45, textAlign: "center" }} variants={DEMO}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit
      </motion.h1>

      <motion.h1 style={{ fontSize: 40, textAlign: "center" }} variants={DEMO}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit
      </motion.h1>

      <motion.h1 style={{ fontSize: 35, textAlign: "center" }} variants={DEMO}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit
      </motion.h1>

      <motion.h1 style={{ fontSize: 30, textAlign: "center" }} variants={DEMO}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit
      </motion.h1>

      <motion.h1 style={{ fontSize: 25, textAlign: "center" }} variants={DEMO}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit
      </motion.h1>

      <motion.h1 style={{ fontSize: 20, textAlign: "center" }} variants={DEMO}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit
      </motion.h1>

      <motion.h1 style={{ fontSize: 15, textAlign: "center" }} variants={DEMO}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit
      </motion.h1>
    </motion.div>
  );
};

export default About;
