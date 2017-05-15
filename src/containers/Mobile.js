import React, { Component } from 'react';

import MobileHeader from '../components/MobileHeader';

import Intro from '../components/Intro';
import About from '../components/About';
import MobileWork from '../components/MobileWork';
import Project from '../components/Project';

class Mobile extends Component {
  render() {
    return (
      <section>
        <MobileHeader />
        <section className="color-black">
          <Intro />
        </section>
        <About />
        <MobileWork />
        <footer className="color-black">
          <Project />
        </footer>
      </section>
    );
  }
}

export default Mobile;
