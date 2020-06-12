import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

function App () {
    return (
      <React.Fragment>
        <Header/>
        <Route exact path="/" component={HomePage} />
      </React.Fragment>
    );
  
}

export default React.memo(App);
