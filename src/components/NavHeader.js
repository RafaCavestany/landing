import React, { Component } from 'react';

import cn from 'classnames';

class NavHeader extends Component {
  render() {
    const {title, arrowUp, arrowDown} = this.props;
    const arrowUpClass = cn(arrowUp ? '' : 'hidden');
    const arrowDownClass = cn(arrowDown ? '' : 'hidden');
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
            <a href="#" className={`vertical-header__icon nav-arrow ${arrowUpClass}`}>
              <i className="svg-icon svg-icon-arrow-up"></i>
            </a>
            <a href="#" className={`vertical-header__icon nav-arrow ${arrowDownClass}`}>
              <i className="svg-icon svg-icon-arrow-down"></i>
            </a>
          </div>
        </div>
      </aside>
    );
  }
}

export default NavHeader;
