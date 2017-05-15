import React, { Component } from 'react';

import MobileHeader from '../components/MobileHeader';

import Intro from '../components/Intro';
import About from '../components/About';
import Work from '../components/Work';
import Project from '../components/Project';

class Mobile extends Component {
  render() {
    return (
      <section>
        <MobileHeader />
        <Intro />
        <About />
        <Work />
        <Project />
      </section>
    );
  }
}

export default Mobile;
