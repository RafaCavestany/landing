import React, { Component } from 'react';

class MobileHeader extends Component {
  render() {
    return (
      <header className="header header--mobile js-hamburger-container">
        <a href="#project" className="header__link">
          <span className="header__txt">
            Rafa Cavestany
          </span>
        </a>
        <div className="hamburger js-hamburger-menu">
          <div className="hamburger__container">
            <span className="hamburger__item"></span>
          </div>
        </div>
      </header>
    );
  }
}

export default MobileHeader;
