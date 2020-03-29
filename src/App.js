import React from 'react';
import { Route } from 'react-router-dom';
import About from './pages/about/about.components';
import HomePage from './pages/homepage/homepage.component';
import Portfolio from './pages/portfolio/portfolio.component';

function App () {
    return (
      <React.Fragment>
        <Route exact path="/" component={HomePage} />
        <Route path="/projects" component={Portfolio} />
        <Route exact path="/contact" component={About} />
      </React.Fragment>
    );
  
}

export default React.memo(App);
