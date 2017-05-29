import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';

import $ from 'jquery';

import {MENU_SECTIONS} from './menuSections';

import {
  getFirstSectionDistance,
  getSecondSectionDistance
} from '../utils/scrollable-helper';

class MenuHeader extends Component {

  constructor (props) {
    super(props);
    this.scrollTollerance = 100;
    this._initState = {
      isMenuActive: false
    };
    this.state = this._initState;
    this.handleClose = this.handleClose.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleClose);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleClose);
  };

  handleClose() {
    this.setState(this._initState);
  };

  handleMenuClick(ev) {
    ev.preventDefault();
    this.setState({
      isMenuActive: !this.state.isMenuActive
    });
  };

  getActiveClass() {
    const {isMenuActive} = this.state;
    return isMenuActive ? 'active' : '';
  };

  getZIndex(zIndex) {
    if (isNaN(zIndex)) {
      return 'inherit';
    }
    return zIndex;
  };

  handleNavClick(ev, navIndex) {
    ev.preventDefault();
    const $section = $('.js-scrollable-section');
    const firstSectionScroll = getFirstSectionDistance($section, false);
    const secondSectionDistance = getSecondSectionDistance($section, true);

    if (navIndex === 0) {
      animateScroll.scrollToTop();
    } else if (navIndex === 1) {
      animateScroll.scrollTo(firstSectionScroll);
    } else if (navIndex === 2) {
      animateScroll.scrollTo(secondSectionDistance);
    } else if (navIndex === 3) {
      animateScroll.scrollToBottom();
    }
  };

  renderMenuItems() {
    return MENU_SECTIONS.map((section, index) => {
      return (
        <li className="c-menu__item" key={`${section.name}-${index}`}>
          <a href="#" onClick={(ev) => this.handleNavClick(ev, index)}>
            {section.title}
          </a>
        </li>
      );
    });
  }

  renderMenu(zIndex) {
    const menuStyle = {
      zIndex: this.getZIndex(zIndex)
    };

    return (
      <div className={`c-menu ${this.getActiveClass()}`} style={menuStyle}>
        <ul className="c-menu__list">
          {this.renderMenuItems()}
        </ul>
      </div>
    );
  };

  render() {
    const {zIndex} = this.props;

    const verticalHeaderStyle = {
      zIndex: this.getZIndex(zIndex + 2)
    };

    return (
      <div>
        <aside className={`c-vertical-header c-vertical-header--right ${this.getActiveClass()}`} style={verticalHeaderStyle}>
          <div className={`c-hamburger ${this.getActiveClass()}`}>
            <a href="#" className="c-hamburger__container" onClick={this.handleMenuClick}>
              <span className="c-hamburger__item"></span>
            </a>
          </div>
          <div className="c-vertical-header__item u-flex-direction-column">
            <div className="c-vertical-header__icons">
              <a href="https://twitter.com/rcavestany" target="_blank" className="c-vertical-header__icon">
                <i className="icon icon--medium icon-twitter"></i>
              </a>
              <a href="mailto:business@rcavestany.com" target="_blank" className="c-vertical-header__icon">
                <i className="icon icon--medium icon-mail"></i>
              </a>
              <a href="https://dribbble.com/rcavestany" target="_blank" className="c-vertical-header__icon">
                <i className="icon icon--medium icon-dribbble"></i>
              </a>
            </div>
          </div>
        </aside>
        {this.renderMenu(zIndex + 1)}
      </div>
    );
  };
}

export default MenuHeader;
