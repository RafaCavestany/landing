import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';

import $ from 'jquery';

class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.scrollTollerance = 100;
  }

  handleArrowUp(ev, navIndex) {
    ev.preventDefault();
    const $scrollableSections = $('.js-scrollable-section');
    const height = $scrollableSections.outerHeight();
    const firstSectionScroll = height / 2;
    const firstSectionDistance = firstSectionScroll + this.scrollTollerance;
    // After second section its not necessary
    const secondSectionScroll = firstSectionDistance + height;
    const secondSectionDistance = secondSectionScroll + this.scrollTollerance;

    if (navIndex === 1) {
      animateScroll.scrollToTop();
    } else if (navIndex === 2) {
      animateScroll.scrollTo(firstSectionScroll);
    } else if (navIndex === 3) {
      animateScroll.scrollTo(secondSectionDistance);
    }
  };

  renderArrowUp() {
    const {navIndex} = this.props;
    if (navIndex === 0) {
      return null;
    }
    return (
      <a href="#"
        className="vertical-header__icon"
        onClick={(ev) => this.handleArrowUp(ev, navIndex)}
      >
        <i className="svg-icon svg-icon-arrow-up"></i>
      </a>
    );
  };

  // Receives a height, and returns that value, multipled
  // for the current index, example:
  //
  // getContentTop(580px, 0);
  // => 580px;
  // getContentTop(580px, 1);
  // => 1060px;
  //
  getContentTop(height, index) {
    // index + 1 is because all indexes starts from 0
    return (height * (index + 1));
  };

  // Receives a value, and returns it with + this.scrollTollerance
  // and an index (optional).
  //
  // example:
  // withTolerance(50)
  // => 50 + this.scrollTollerance
  // withTolerance(50, 1)
  // => 50 + (this.scrollTollerance * 2)
  //
  withTolerance(value, index) {
    if (index) {
      return value + (this.scrollTollerance * (index + 1));
    }
    return value + this.scrollTollerance;
  };

  handleArrowDown(ev, navIndex) {
    ev.preventDefault();
    const $scrollableSections = $('.js-scrollable-section');
    const height = $scrollableSections.outerHeight();
    const firstSectionScroll = height / 2;
    const firstSectionDistance = firstSectionScroll + this.scrollTollerance;
    // After second section its not necessary
    const secondSectionScroll = firstSectionDistance + height;
    const secondSectionDistance = secondSectionScroll + this.scrollTollerance;

    if (navIndex === 0) {
      animateScroll.scrollTo(firstSectionScroll);
    } else if (navIndex === 1) {
      animateScroll.scrollTo(secondSectionDistance);
    } else if (navIndex === 2) {
      animateScroll.scrollToBottom();
    }
  };

  renderArrowDown() {
    const {navIndex} = this.props;
    if (navIndex === 3) {
      return null;
    }
    return (
      <a href="#"
        className="vertical-header__icon"
        onClick={(ev) => this.handleArrowDown(ev, navIndex)}
      >
        <i className="svg-icon svg-icon-arrow-down"></i>
      </a>
    );
  };

  render() {
    const {title} = this.props;
    return (
      <aside className="vertical-header vertical-header--left">
        <div className="vertical-header__item h-one-third">
          <div className="vertical-header__content vertical-header__content--rotated u-flex-align-start">
            Rafa Cavestany
          </div>
        </div>
        <div className="vertical-header__item h-one-third">
          <div className="vertical-header__content vertical-header__content--rotated">
            {title}
          </div>
        </div>
        <div className="vertical-header__item h-one-third u-flex-direction-column">
          <div className="vertical-header__icons">
            {this.renderArrowUp()}
            {this.renderArrowDown()}
          </div>
        </div>
      </aside>
    );
  }
}

export default NavHeader;
