import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';

import $ from 'jquery';

import {
  getFirstSectionDistance,
  getSecondSectionDistance
} from '../utils/scrollable-helper';

class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.scrollTollerance = 100;
  }

  handleArrowUp(ev, navIndex) {
    ev.preventDefault();
    const $section = $('.js-scrollable-section');
    const firstSectionScroll = getFirstSectionDistance($section, false);
    const secondSectionDistance = getSecondSectionDistance($section, true);

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
        className="c-vertical-header__icon"
        onClick={(ev) => this.handleArrowUp(ev, navIndex)}
      >
        <i className="svg-icon svg-icon-arrow-up"></i>
      </a>
    );
  };

  handleArrowDown(ev, navIndex) {
    ev.preventDefault();
    const $section = $('.js-scrollable-section');
    const firstSectionScroll = getFirstSectionDistance($section, false);
    const secondSectionDistance = getSecondSectionDistance($section, true);

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
        className="c-vertical-header__icon"
        onClick={(ev) => this.handleArrowDown(ev, navIndex)}
      >
        <i className="svg-icon svg-icon-arrow-down"></i>
      </a>
    );
  };

  render() {
    const {title} = this.props;
    return (
      <aside className="c-vertical-header c-vertical-header--left">
        <div className="c-vertical-header__item h-one-third">
          <div className="c-vertical-header__content c-vertical-header__content--rotated u-flex-align-start">
            Rafa Cavestany
          </div>
        </div>
        <div className="c-vertical-header__item h-one-third">
          <div className="c-vertical-header__content c-vertical-header__content--rotated">
            {title}
          </div>
        </div>
        <div className="c-vertical-header__item h-one-third u-flex-direction-column">
          <div className="c-vertical-header__icons">
            {this.renderArrowUp()}
            {this.renderArrowDown()}
          </div>
        </div>
      </aside>
    );
  }
}

export default NavHeader;
