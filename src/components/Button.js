import React, { Component } from 'react';

import cn from 'classnames';

class Button extends Component {
  renderClickableButton(link, name) {
    const btnClassName = cn(
      'c-button',
      'c-button--cta'
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
      <span className="c-button">
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
