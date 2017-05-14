import React, { Component } from 'react';

import { animateScroll } from 'react-scroll';

class Header extends Component {
  handleClick(ev) {
    ev.preventDefault();
    animateScroll.scrollToBottom();
  };

  render() {
    return (
      <header className="header header--desktop">
        <a href="#" className="header__link" onClick={this.handleClick}>
          <i className="icon icon-party-popper header__link__icon"></i>
          <span className="header__link__text">
            Start a Project
          </span>
        </a>
      </header>
    );
  }
}

export default Header;
