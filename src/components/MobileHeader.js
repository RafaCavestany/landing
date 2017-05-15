import React, { Component } from 'react';

class MobileHeader extends Component {
  render() {
    return (
      <header className="header header--mobile">
        <a href="#project" className="header__link">
          <span className="header__txt">
            Rafa Cavestany
          </span>
        </a>
        <div className="hamburger">
          <div className="hamburger__container">
            <span className="hamburger__item"></span>
          </div>
        </div>
      </header>
    );
  }
}

export default MobileHeader;
