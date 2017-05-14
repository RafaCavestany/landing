import React, { Component } from 'react';

import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
import NavHeader from './components/NavHeader';
import MenuHeader from './components/MenuHeader';
import About from './components/About';


import './js/scrollable-sections';
import './js/scrollable-colors';

class App extends Component {
  render() {
    return (
      <div className="container">
        <section id="intro"
          style={{zIndex: 80}}
          className="scrollable-section color-black js-scrollable js-scrollable-section"
        >
          <Header />
          <MobileHeader />
          <NavHeader navIndex={0} title="Intro" arrowDown={true} />
          <article id="rafael" className="card banner">
            <h1 className="card__title banner__title">
              <div className="banner__container">
                Rafa Cavestany is an Award-winning&nbsp;
                <span className="u-txt-underlined">Designer</span>
                &nbsp;&amp;&nbsp;
                <span className="u-txt-underlined">Creative Director</span>
                &nbsp;working in digital projects for all over the world.
              </div>
            </h1>
          </article>
          <MenuHeader zIndex={82}/>
        </section>
        <section id="content" className="scrollable-content js-main-container js-scrollable-content" style={{zIndex: 50}}>
          <div>
            <div className="blackout js-blackout"></div>
            <About zIndex={70} />
            <section id="work"
              style={{zIndex: 60}}
              className="scrollable-content js-scrollable-content js-work-container">
              <Header />
              <MobileHeader />
              <NavHeader navIndex={2} title="Work" arrowUp={true} arrowDown={true} />
              <article id="oincs" className="card card--work js-work" data-color="orange">
                <div className="card__container">
                  <h2 className="card__title">Oincs</h2>
                  <label className="card__label">
                    ROLES: Co-Founder / Product Manager / Designer
                  </label>
                  <hr className="card__line-break"></hr>
                  <p className="card__paragraph">
                    Oincs it’s a mobile crowdsourcing platform that helps people move
                    around safely by sharing real time information such as danger zones,
                    accidents, robberies, garbage in the street among others incidents,
                    to create a better city life experience.
                  </p>
                  <a href="http://oincs.com/" className="button">
                    Website
                  </a>
                </div>
                <figure className="card__image card__image--oincs">
                </figure>
              </article>
              <article id="cab2ride" className="card card--work js-work" data-color="black">
                <div className="card__container">
                  <h2 className="card__title">Cab2ride</h2>
                  <label className="card__label">
                    ROLES: Project Manager / Designer
                  </label>
                  <hr className="card__line-break"></hr>
                  <p className="card__paragraph">
                    With Cab2ride you can book a taxi from your any smartphone in just
                    one click and in seconds. The app uses GPS technology to directly
                    connect you with the nearest driver right when you need it.
                  </p>
                  <a href="http://oincs.com/" className="button">
                    Appstore
                  </a>
                  <a href="http://oincs.com/" className="button">
                    Playstore
                  </a>
                </div>
                <figure className="card__image card__image--cab-2-ride">
                </figure>
              </article>
              <article id="itau" className="card card--work js-work" data-color="white">
                <div className="card__container">
                  <h2 className="card__title">Itaú</h2>
                  <label className="card__label">
                    ROLES: Product Manager / Designer
                  </label>
                  <hr className="card__line-break"></hr>
                  <p className="card__paragraph">
                    With Cab2ride you can book a taxi from your any smartphone in just
                    one click and in seconds. The app uses GPS technology to directly
                    connect you with the nearest driver right when you need it.
                  </p>
                  <a href="http://oincs.com/" className="button">
                    Website
                  </a>
                </div>
                <figure className="card__image card__image--itau">
                </figure>
              </article>
              <article id="yts" className="card card--work js-work" data-color="black">
                <div className="card__container">
                  <h2 className="card__title">Yts</h2>
                  <label className="card__label">
                    ROLES: Designer
                  </label>
                  <hr className="card__line-break"></hr>
                  <p className="card__paragraph">
                    Oincs it’s a mobile crowdsourcing platform that helps people move
                    around safely by sharing real time information such as danger zones,
                    accidents, robberies, garbage in the street among others incidents,
                    to create a better city life experience.
                  </p>
                  <a href="http://oincs.com/" className="button">
                    Website
                  </a>
                </div>
                <figure className="card__image card__image--yts">
                </figure>
              </article>
              <article id="pagoo" className="card card--work js-work" data-color="green">
                <div className="card__container">
                  <h2 className="card__title">Pagoo</h2>
                  <label className="card__label">
                    ROLES: Designer
                  </label>
                  <hr className="card__line-break"></hr>
                  <p className="card__paragraph">
                    Oincs it’s a mobile crowdsourcing platform that helps people move
                    around safely by sharing real time information such as danger zones,
                    accidents, robberies, garbage in the street among others incidents,
                    to create a better city life experience.
                  </p>
                  <a href="http://oincs.com/" className="button">
                    Website
                  </a>
                </div>
                <figure className="card__image card__image--pagoo">
                </figure>
              </article>
              <MenuHeader zIndex={60}/>
            </section>
          </div>
        </section>
        <footer id="footer"
          style={{zIndex: 40}}
          className="scrollable-footer color-black js-scrollable js-scrollable-footer"
        >
          <div className="blackout js-footer-blackout" style={{zIndex: 43}}></div>
          <Header />
          <MobileHeader />
          <NavHeader navIndex={3} title="Project" arrowUp={true} arrowDown={false} />
          <article id="project" className="card">
            <h2 className="card__title">
              {`Interested in starting a project?`}
            </h2>
            <br/>
            <h2 className="card__title">
              {`Drop me a line at:`}
              <br/>
              <a href="mailto:business@rcavestany.com"
                className="card__title__link u-txt-underlined"
              >
                {`business@rcavestany.com`}
              </a>
            </h2>
          </article>
          <MenuHeader zIndex={40}/>
        </footer>
      </div>
    );
  }
}

export default App;
