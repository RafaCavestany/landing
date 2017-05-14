import React, { Component } from 'react';

import { animateScroll, Element } from 'react-scroll';

import Header from './Header';
import MobileHeader from './MobileHeader';
import NavHeader from './NavHeader';
import MenuHeader from './MenuHeader';

import $ from 'jquery';

class About extends Component {

  constructor (props) {
    super(props);
    this.scrollTollerance = 100;
    this.handleGoToWork = this.handleGoToWork.bind(this);
  };

  handleGoToWork(ev) {
    ev.preventDefault();
    const $scrollableSections = $('.js-scrollable-section');
    const height = $scrollableSections.outerHeight();
    const firstSectionScroll = height / 2;
    const firstSectionDistance = firstSectionScroll + this.scrollTollerance;
    // After second section its not necessary
    const secondSectionScroll = firstSectionDistance + height;
    const secondSectionDistance = secondSectionScroll + this.scrollTollerance;
    animateScroll.scrollTo(secondSectionDistance);
  };

  render() {
    return (
      <section id="about"
        style={{zIndex: this.props.zIndex}}
        className="scrollable-section color-white js-scrollable js-scrollable-section"
      >
        <Header />
        <MobileHeader />
        <NavHeader navIndex={1} title="About" arrowUp={true} arrowDown={true} />
        <article id="aboutRafael" className="card">
          <h2 className="card__title">
            He has led projects for companies such as Intel, AT&amp;T, Telefónica,
            HP, Visa, Directv, Golf Channel among others.
          </h2>
          <p className="card__paragraph card__paragraph--small">
            With over a decade of experience, Rafa has helped clients of all sizes
            to plan, create and grow their ideas in to digital products, bla bla
            human center approach, user experience, etc.
          </p>
          <a href="#" className="card__link" onClick={this.handleGoToWork}>
            See some of his projects below.
          </a>
        </article>
        <MenuHeader zIndex={this.props.zIndex} />
      </section>
    );
  }
}

export default About;
