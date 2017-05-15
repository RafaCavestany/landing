import React, { Component } from 'react';

import cn from 'classnames';

class Button extends Component {

  constructor(props) {
    super(props);
  };

  handleClick(ev) {
    ev.preventDefault();
  }

  render() {
    const {link, name} = this.props;

    const btnClassName = cn(
      'button',
      link ? 'button--cta' : ''
    );

    return (
      <a href={link ? link : '#'}
        target="_blank"
        className={btnClassName}
        onClick={this.handleClick}
      >
        {name}
      </a>
    );
  };
}

export default Button;
