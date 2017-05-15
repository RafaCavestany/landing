import React, { Component } from 'react';

class MobileWork extends Component {
  render() {
    return (
      <section id="work">
        <article id="oincs" className="card card--work color-orange">
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
            <a href="http://oincs.com/" target="_blank" className="button">
              Website
            </a>
          </div>
          <figure className="card__image card__image--oincs">
          </figure>
        </article>
        <article id="cab2ride" className="card card--work color-black">
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
            <a href="http://oincs.com/" target="_blank" className="button">
              Appstore
            </a>
            <a href="http://oincs.com/" target="_blank" className="button">
              Playstore
            </a>
          </div>
          <figure className="card__image card__image--cab-2-ride">
          </figure>
        </article>
        <article id="itau" className="card card--work color-white">
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
            <a href="http://oincs.com/" target="_blank" className="button">
              Website
            </a>
          </div>
          <figure className="card__image card__image--itau">
          </figure>
        </article>
        <article id="yts" className="card card--work color-black">
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
            <a href="http://oincs.com/" target="_blank" className="button">
              Website
            </a>
          </div>
          <figure className="card__image card__image--yts">
          </figure>
        </article>
        <article id="pagoo" className="card card--work color-green">
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
            <a href="http://oincs.com/" target="_blank" className="button">
              Website
            </a>
          </div>
          <figure className="card__image card__image--pagoo">
          </figure>
        </article>
      </section>
    );
  }
}

export default MobileWork;
