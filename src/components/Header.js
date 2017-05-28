import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';

class Header extends Component {
  handleClick(ev) {
    ev.preventDefault();
    animateScroll.scrollToBottom();
  };

  render() {
    return (
      <header className="c-header c-header--desktop">
        <a href="#" className="c-header__link" onClick={this.handleClick}>
          <i className="c-header__link__icon icon icon-party-popper"></i>
          <span className="c-header__link__text">
            Start a Project
          </span>
        </a>
      </header>
    );
  }
}

export default Header;
