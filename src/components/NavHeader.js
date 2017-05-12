import React, { Component } from 'react';

import cn from 'classnames';

class NavHeader extends Component {

  renderArrowUp() {
    const {navIndex} = this.props;
    let className = ''
    if (navIndex === 0) {
      className = 'hidden';
    }
    return (
      <a href="#" className={`vertical-header__icon nav-arrow ${className}`}>
        <i className="svg-icon svg-icon-arrow-up"></i>
      </a>
    );
  };

  renderArrowDown() {
    const {navIndex} = this.props;
    let className = ''
    if (navIndex === 3) {
      className = 'hidden';
    }
    return (
      <a href="#" className={`vertical-header__icon nav-arrow ${className}`}>
        <i className="svg-icon svg-icon-arrow-down"></i>
      </a>
    );
  };

  render() {
    const {title} = this.props;
    return (
      <aside className="vertical-header vertical-header--left">
        <div className="vertical-header__item h-one-third">
          <div className="vertical-header__content vertical-header__content--rotated u-flex-align-start">
            Rafa Cavestany
          </div>
        </div>
        <div className="vertical-header__item h-one-third">
          <div className="vertical-header__content vertical-header__content--rotated">
            {title}
          </div>
        </div>
        <div className="vertical-header__item h-one-third u-flex-direction-column">
          <div className="vertical-header__icons">
            {this.renderArrowUp()}
            {this.renderArrowDown()}
          </div>
        </div>
      </aside>
    );
  }
}

export default NavHeader;
