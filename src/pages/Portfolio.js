import React from 'react';
import { pageAnimation } from '../animation';
import { motion } from 'framer-motion';
import Jobs from '../components/Jobs';

const Portfolio = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      className="paneContainer"
    >
      <h1>Portfolio</h1>
      <Jobs />
    </motion.div>
  );
};

export default Portfolio;
