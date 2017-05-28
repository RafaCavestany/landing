import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <article id="project" className="c-card c-project">
        <div className="c-project__bg"></div>
        <h2 className="c-card__title">
          {`Interested in starting a project?`}
        </h2>
        <br/>
        <h2 className="c-card__title">
          {`Drop me a line at:`}
          <br/>
          <a href="mailto:business@rcavestany.com"
            className="c-card__title__link u-txt-underlined"
          >
            {`business@rcavestany.com`}
          </a>
        </h2>
      </article>
    );
  }
}

export default Intro;
