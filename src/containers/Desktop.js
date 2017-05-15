import React, { Component } from 'react';

import $ from 'jquery';

import Header from '../components/Header';
import NavHeader from '../components/NavHeader';
import MenuHeader from '../components/MenuHeader';

import Intro from '../components/Intro';
import About from '../components/About';
import Work from '../components/Work';
import Project from '../components/Project';

import {setBodyHeight, clearBodyHeight} from '../utils/set-body-height';

import '../utils/scrollable-sections';
import '../utils/scrollable-colors';

class Desktop extends Component {
  componentDidMount() {
    setBodyHeight();
  }

  componentWillUnmount() {
    clearBodyHeight();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <section id="intro"
            style={{zIndex: 80}}
            className="scrollable-section color-black js-scrollable js-scrollable-section"
          >
            <Header />
            <NavHeader navIndex={0} title="Intro" arrowDown={true} />
            <Intro />
            <MenuHeader zIndex={82} />
          </section>
          <section id="content" className="scrollable-content js-main-container js-scrollable-content" style={{zIndex: 50}}>
            <div>
              <div className="blackout js-blackout"></div>
              <section id="about"
                className="scrollable-section color-white js-scrollable js-scrollable-section"
                style={{zIndex: 70}}
              >
                <Header />
                <NavHeader navIndex={1} title="About" arrowUp={true} arrowDown={true} />
                <About zIndex={70} />
                <MenuHeader zIndex={72} />
              </section>
              <section id="work"
                style={{zIndex: 60}}
                className="scrollable-content js-scrollable-content js-scrollable-color-container">
                <Header />
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
            <NavHeader navIndex={3} title="Project" arrowUp={true} arrowDown={false} />
            <Project />
            <MenuHeader zIndex={40} />
          </footer>
        </div>
      </div>
    );
  }
}

export default Desktop;
