import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

//components
import Dash from './Dash';
// import Jobs from './Jobs';
import Employment from '../pages/Employment';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Project from '../components/Project';
import { AnimatePresence } from 'framer-motion';

const Pane = () => {
  const location = useLocation();
  return (
    <main>
      <section className="pane">
        <Dash />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={About} />
            <Route path="/employment" component={Employment} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/portfolio/:id" exact component={Project} />
          </Switch>
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Pane;
