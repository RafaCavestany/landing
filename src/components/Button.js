import React, { Component } from 'react';

import cn from 'classnames';

class Button extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    const {link, name} = this.props;

    const btnClassName = cn(
      'button',
      link ? 'button--cta' : ''
    );

    return (
      <a href={link ? link : 'javascript:'}
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
