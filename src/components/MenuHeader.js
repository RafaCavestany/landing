import React, { Component } from 'react';

class MenuHeader extends Component {

  constructor (props) {
    super(props);
    this._initState = {
      isMenuActive: false
    };
    this.state = this._initState;
    this.handleClose = this.handleClose.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
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
    })
  };

  getActiveClass() {
    const {isMenuActive} = this.state;
    return isMenuActive ? 'active' : '';
  }

  getZIndex(zIndex) {
    if (isNaN(zIndex)) {
      return 'inherit';
    }
    return zIndex;
  }

  renderMenu(zIndex) {
    const menuStyle = {
      zIndex: this.getZIndex(zIndex)
    };

    return (
      <div className={`menu ${this.getActiveClass()}`} style={menuStyle}>
        <ul className="menu__list">
          <li className="menu__item">
            <a href="#intro" onClick={this.handleClose}>
              Intro
            </a>
          </li>
          <li className="menu__item">
            <a href="#about" onClick={this.handleClose}>
              About
            </a>
          </li>
          <li className="menu__item">
            <a href="#work" onClick={this.handleClose}>
              Work
            </a>
          </li>
          <li className="menu__item">
            <a href="#project" onClick={this.handleClose}>
              Project
            </a>
          </li>
        </ul>
      </div>
    );
  };

  render() {
    const {zIndex} = this.props;

    const verticalHeaderStyle = {
      zIndex: this.getZIndex(zIndex)
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
        {this.renderMenu(zIndex - 1)}
      </div>
    );
  };
}

export default MenuHeader;
