import React, { Component } from 'react';

import MobileHeader from '../components/MobileHeader';

import Intro from '../components/sections/Intro';
import About from '../components/sections/About';
import MobileWork from '../components/sections/MobileWork';
import Project from '../components/sections/Project';

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
