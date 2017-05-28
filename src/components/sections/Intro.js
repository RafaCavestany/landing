import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <article id="intro" className="card banner">
        <h1 className="card__title banner__title">
          <div className="banner__container">
            Rafa Cavestany is an Award-winning <span className="u-d-inline u-txt-underlined">
              Designer
            </span> &amp; <span className="u-d-inline u-txt-underlined">
              Creative Director
            </span> working in digital projects for all over the world.
          </div>
        </h1>
      </article>
    );
  }
}

export default Intro;
