import React, { Component } from 'react';

import { animateScroll } from 'react-scroll';

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
    );
  }
}

export default About;
