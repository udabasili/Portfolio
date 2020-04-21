import React, { Component } from 'react';
import Slide from '../../components/slides/slide';
import Header from '../../components/header/header.component';

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Slide />
      </React.Fragment>
    );
  }
}

export default Portfolio;
