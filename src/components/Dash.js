import React from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import {motion} from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Dash = () => {
  return (
    <div className="dash">
      <div className="profile">
        <img
          src="https://images.unsplash.com/photo-1576518985149-4f63dfabf9d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3334&q=80"
          alt="Ryan's picture"
        />
        <h5>Ryan MacLennan</h5>
      </div>
      <div className="links">
        <div className="link">
          <Link to="/">
            <FontAwesomeIcon icon={faUser} className="faIcon" />
            <p>About Me</p>
          </Link>
        </div>
        <div className="link">
          <NavLink to="/employment" activeClassName="selected">
            <FontAwesomeIcon icon={faBriefcase} className="faIcon" />
            <p>Employment</p>
          </NavLink>
          {/* <Link to="/employment"></Link> */}
        </div>
        <div className="link">
          <Link to="/portfolio">
            <FontAwesomeIcon icon={faFolderOpen} className="faIcon" />
            <p>Portfolio</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dash;
