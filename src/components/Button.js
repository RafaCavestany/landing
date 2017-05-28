import React, { Component } from 'react';

import cn from 'classnames';

class Button extends Component {
  renderClickableButton(link, name) {
    const btnClassName = cn(
      'button',
      'button--cta'
    );

    return (
      <a href={link}
        target="_blank"
        className={btnClassName}
      >
        {name}
      </a>
    );
  }

  renderNormalButton(name) {
    return (
      <span className="button">
        {name}
      </span>
    );
  }

  render() {
    const {link, name} = this.props;

    return (
      link ? this.renderClickableButton(link, name) :
             this.renderNormalButton(name)
    );
  };
}

export default Button;
