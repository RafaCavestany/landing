import React, { Component } from 'react';

import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
import NavHeader from './components/NavHeader';
import MenuHeader from './components/MenuHeader';

import Intro from './components/Intro';
import About from './components/About';
import Work from './components/Work';
import Project from './components/Project';


import './js/scrollable-sections';
import './js/scrollable-colors';

class App extends Component {
  render() {
    return (
      <div className="container">
        <section id="intro"
          style={{zIndex: 80}}
          className="scrollable-section color-black js-scrollable js-scrollable-section"
        >
          <Header />
          <MobileHeader />
          <NavHeader navIndex={0} title="Intro" arrowDown={true} />
          <Intro />
          <MenuHeader zIndex={82}/>
        </section>
        <section id="content" className="scrollable-content js-main-container js-scrollable-content" style={{zIndex: 50}}>
          <div>
            <div className="blackout js-blackout"></div>
            <section id="about"
              className="scrollable-section color-white js-scrollable js-scrollable-section"
              style={{zIndex: 70}}
            >
              <Header />
              <MobileHeader />
              <NavHeader navIndex={1} title="About" arrowUp={true} arrowDown={true} />
              <About zIndex={70} />
              <MenuHeader zIndex={72}/>
            </section>
            <section id="work"
              style={{zIndex: 60}}
              className="scrollable-content js-scrollable-content js-work-container">
              <Header />
              <MobileHeader />
              <NavHeader navIndex={2} title="Work" arrowUp={true} arrowDown={true} />
              <Work zIndex={60} />
              <MenuHeader zIndex={60} />
            </section>
          </div>
        </section>
        <footer id="footer"
          style={{zIndex: 40}}
          className="scrollable-footer color-black js-scrollable js-scrollable-footer"
        >
          <div className="blackout js-footer-blackout" style={{zIndex: 43}}></div>
          <Header />
          <MobileHeader />
          <NavHeader navIndex={3} title="Project" arrowUp={true} arrowDown={false} />
          <Project />
          <MenuHeader zIndex={40}/>
        </footer>
      </div>
    );
  }
}

export default App;
