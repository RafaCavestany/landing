import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header header--desktop">
        <a href="#project" className="header__link">
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
