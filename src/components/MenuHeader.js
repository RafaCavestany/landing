import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';

import $ from 'jquery';

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

  componentDidMount() {
    window.addEventListener('scroll', this.handleClose);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleClose);
  };

  handleClose() {
    this.setState(this._initState);
  };

  handleMenuClick() {
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
    const $scrollableSections = $('.js-scrollable-section');
    const height = $scrollableSections.outerHeight();
    const firstSectionScroll = height / 2;
    const firstSectionDistance = firstSectionScroll + this.scrollTollerance;
    // After second section its not necessary
    const secondSectionScroll = firstSectionDistance + height;
    const secondSectionDistance = secondSectionScroll + this.scrollTollerance;

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
    const sections = [
      { name: 'intro'},
      { name: 'about'},
      { name: 'work'},
      { name: 'project'}
    ];
    return sections.map((section, index) => {
      return (
        <li className="menu__item" key={`${section.name}-${index}`}>
          <a href="#" onClick={(ev) => this.handleNavClick(ev, index)} className="u-txt-capitalize">
            {section.name}
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
      <div className={`menu ${this.getActiveClass()}`} style={menuStyle}>
        <ul className="menu__list">
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
        <aside className={`vertical-header vertical-header--right ${this.getActiveClass()}`} style={verticalHeaderStyle}>
          <div className={`hamburger ${this.getActiveClass()}`} onClick={this.handleMenuClick}>
            <div className="hamburger__container">
              <span className="hamburger__item"></span>
            </div>
          </div>
          <div className="vertical-header__item u-flex-direction-column">
            <div className="vertical-header__icons">
              <a href="https://twitter.com/rcavestany" target="_blank" className="vertical-header__icon">
                <i className="icon icon--medium icon-twitter"></i>
              </a>
              <a href="mailto:business@rcavestany.com" target="_blank" className="vertical-header__icon">
                <i className="icon icon--medium icon-mail"></i>
              </a>
              <a href="https://dribbble.com/rcavestany" target="_blank" className="vertical-header__icon">
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
