import React from 'react';
import { portfolioList } from '../animation';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import { portfolio } from '../data';

const Portfolio = () => {
  return (
    <motion.div
      variants={portfolioList}
      exit="exit"
      initial="hidden"
      animate="visible"
      className="paneContainer"
    >
      <h1>Portfolio</h1>
      <Projects portfolio={portfolio} />
    </motion.div>
  );
};

export default Portfolio;
