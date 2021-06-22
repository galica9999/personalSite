import React from 'react';
//router
import { Link } from 'react-router-dom';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

//motion
import { motion } from 'framer-motion';
import { projectAnim } from '../animation';

const Projects = ({ portfolio }) => {
  console.log(portfolio);
  const projectsContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const projectAnimation = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  return (
    <motion.div variants={projectsContainer} initial="hidden" animate="visible">
      {portfolio.map((project) => (
        <motion.div
          variants={projectAnimation}
          //   initial={{ opacity: 0 }}
          //   initial="hidden"
          //   animate="show"
          //   animate={{ opacity: 1, transition: { duration: 2 } }}
          className="paneCard"
          key={project.name}
        >
          <h1 className="projectTitle">{project.name}</h1>
          <section className="projectDescription">
            <h3>Description:</h3>
            <p>{project.about.blurb}</p>
            {/* <p>{project.about.frontEnd}</p>
            <p>{project.about.backend}</p> */}
          </section>
          <section className="projectTools">
            <h3>Tools Used:</h3>
            <ul>
              {project.toolsUsed.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </section>
          <section className="projectInternal">
            <h3>Company Internal:</h3>
            <p>{project.internal ? 'Yes' : 'No'}</p>
          </section>
          <div className="readMore">
            <Link to="/portfolio/thing">
              Read more{' '}
              <FontAwesomeIcon icon={faChevronRight} className="faIcon" />
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
