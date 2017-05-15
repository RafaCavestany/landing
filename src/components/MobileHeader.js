import React, { Component } from 'react';

import cn from 'classnames';

class MobileHeader extends Component {
  constructor (props) {
    super(props);
    this.zIndex = 100;
    this._initState = {
      isMenuActive: false
    };
    this.state = this._initState;
    this.handleClose = this.handleClose.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
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
    const {isMenuActive} = this.state;
    const headerClassName = cn(
      'header',
      'header--mobile',
      isMenuActive ? '' : 'color-black'
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