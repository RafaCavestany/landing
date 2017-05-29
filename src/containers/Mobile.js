import React, { Component } from 'react';

import MobileHeader from '../components/MobileHeader';

import Intro from '../components/sections/Intro';
import About from '../components/sections/About';
import MobileWork from '../components/sections/MobileWork';
import Project from '../components/sections/Project';

class Mobile extends Component {
  componentWillUnmount() {
    window.location.reload();
  }

  render() {
    return (
      <section>
        <MobileHeader />
        <section className="t-color-black">
          <Intro />
        </section>
        <section className="t-color-white">
          <About isMobile="true" />
        </section>
        <MobileWork />
        <footer className="t-color-black">
          <Project />
        </footer>
      </section>
    );
  }
}

export default Mobile;
