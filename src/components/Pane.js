import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Dash from './Dash';
// import Jobs from './Jobs';
import Employment from '../pages/Employment';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';

const Pane = () => {
  return (
    <main>
      <Router>
        <section className="pane">
          <Dash />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/employment" component={Employment} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </section>
      </Router>
    </main>
  );
};

export default Pane;
