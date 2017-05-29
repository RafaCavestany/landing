import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';

import $ from 'jquery';

import { getSecondSectionDistance } from '../../utils/scrollable-helper';

class About extends Component {
  constructor (props) {
    super(props);
    this.scrollTollerance = 100;
    this.handleGoToWork = this.handleGoToWork.bind(this);
  };

  handleGoToWork(ev) {
    if (this.props.isMobile) {
      return;
    }
    ev.preventDefault();
    const $section = $('.js-scrollable-section');
    const secondSectionDistance = getSecondSectionDistance($section, true);
    animateScroll.scrollTo(secondSectionDistance);
  };

  render() {
    return (
      <article id="about" className="c-card">
        <h2 className="c-card__title">
          He has led projects for companies such as Intel, AT&amp;T, Telefónica,
          HP, Visa, Directv, Golf Channel among others.
        </h2>
        <p className="c-card__paragraph c-card__paragraph--small">
          With over a decade of experience, Rafa has helped clients of all sizes
          to plan, create and grow their ideas in to digital products, bla bla
          human center approach, user experience, etc.
        </p>
        <a href="#work" className="c-card__link" onClick={this.handleGoToWork}>
          See some of his projects below.
        </a>
      </article>
    );
  }
}

export default About;
