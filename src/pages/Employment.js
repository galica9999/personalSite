import { motion } from 'framer-motion';
import React from 'react';
import Jobs from '../components/Jobs';
import { pageAnimation } from '../animation';

const Employment = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      className="paneContainer"
    >
      <h1>Positions</h1>
      <Jobs />
    </motion.div>
  );
};

export default Employment;
