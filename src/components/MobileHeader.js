import React, { Component } from 'react';

import $ from 'jquery';

import cn from 'classnames';

class MobileHeader extends Component {
  constructor (props) {
    super(props);
    this.zIndex = 100;
    this._initState = {
      isMenuActive: false,
      isHeaderVisible: true
    };
    this.state = {
      ...this._initState,
      currentPosition: 0,
      isHeaderAtTop: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll() {
    const {currentPosition} = this.state;
    const newPosition = $(window).scrollTop();
    let isHeaderVisible = false;
    let isHeaderAtTop = false;
    if (newPosition < currentPosition) {
      isHeaderVisible = true;
    }
    if (newPosition === 0) {
      isHeaderAtTop = true;
    }
    this.setState({
      currentPosition: newPosition,
      isHeaderVisible: isHeaderVisible,
      isHeaderAtTop: isHeaderAtTop
    });
  };

  handleNavClick(ev) {
    this.handleClose();
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

  renderMenuItems() {
    const sections = [
      { name: 'intro'},
      { name: 'about'},
      { name: 'work'},
      { name: 'project'}
    ];
    return sections.map((section, index) => {
      return (
        <li key={`${section.name}-${index}`}
          className="menu__item"
          onClick={this.handleNavClick}
        >
          <a href={`#${section.name}`} className="u-txt-capitalize">
            {section.name}
          </a>
        </li>
      );
    });
  }

  renderMenu(zIndex) {
    return (
      <div className={`menu ${this.getActiveClass()}`} style={{zIndex: this.zIndex - 1}}>
        <ul className="menu__list">
          {this.renderMenuItems()}
        </ul>
      </div>
    );
  };

  render() {
    const {isMenuActive, isHeaderVisible, isHeaderAtTop} = this.state;
    const headerClassName = cn(
      'header',
      'header--mobile',
      isMenuActive ? '' : 'color-black',
      isHeaderVisible ? 'active' : '',
      isHeaderAtTop ? 'at-top' : ''
    );

    return (
      <div>
        <header className={headerClassName} style={{zIndex: this.zIndex}}>
          <a href="#project" className="header__link">
            <span className="header__txt">
              Rafa Cavestany
            </span>
          </a>
          <div className={`hamburger ${this.getActiveClass()}`} onClick={this.handleMenuClick}>
            <div className="hamburger__container">
              <span className="hamburger__item"></span>
            </div>
          </div>
        </header>
        {this.renderMenu()}
      </div>
    );
  }
}

export default MobileHeader;
