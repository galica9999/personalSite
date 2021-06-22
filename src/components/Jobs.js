import React from 'react';
import { motion } from 'framer-motion';
// import { positions } from '../data';

const Jobs = ({ positions }) => {
  return (
    <>
      {positions.map((position) => (
        <div className="paneCard" key={position.title}>
          <h3>
            {position.title}
            <strong className="dates">
              {position.where} <span>{position.timePeriod}</span>
            </strong>
          </h3>
          <p>
            {position.description}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            numquam accusantium praesentium sequi laboriosam, sunt ad. Veniam
            iusto saepe ad numquam, maxime perferendis consequuntur libero.
            Error deserunt totam consequatur iure. <br />
            <strong>
              make it so the right side scrolls so the page doesnt get too big.
            </strong>
          </p>
          <h6>Achievments</h6>
          <p>{position.responsibilities}</p>
        </div>
      ))}
    </>
  );
};

export default Jobs;
