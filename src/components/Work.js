import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);
    this.workSections = [
      {
        name: 'oincs',
        roles: ['Co-Founder', 'Product Manager', 'Designer'],
        description: `Oincs it’s a mobile crowdsourcing platform that helps people move
                      around safely by sharing real time information such as danger zones,
                      accidents, robberies, garbage in the street among others incidents,
                      to create a better city life experience.`,
        buttons: [
          {
            name: 'Website',
            link: 'http://oincs.com/'
          }
        ],
        color: 'orange'
      }
    ];
  };

  getRoles(roles) {
    let rolesString = ``;
    roles.map(function(role, index) {
      if (index === 0) {
        rolesString += `${role}`;
      } else {
        rolesString += ` / ${role}`;
      }
    });
    return `ROLES: ${rolesString}`;
  };

  renderWorkButtons(buttons, sectionName) {
    console.log(sectionName);
    return buttons.map(function(button, index) {
      return (
        <a href={button.link}
          target="_blank"
          className="button"
          key={`btn-${sectionName}-${index}`}
        >
          {button.name}
        </a>
      );
    });
  };

  renderWorkSection(workSection) {
    return (
      <article
        id={workSection.name}
        key={workSection.name}
        className="card card--work js-work"
        data-color={workSection.color}>
        <div className="card__container">
          <h2 className="card__title">
            {workSection.name}
          </h2>
          <label className="card__label">
            {this.getRoles(workSection.roles)}
          </label>
          <hr className="card__line-break"></hr>
          <p className="card__paragraph">
            {workSection.description}
          </p>
          {this.renderWorkButtons(workSection.buttons, workSection.name)}
        </div>
        <figure className={`card__image card__image--${workSection.name}`}>
        </figure>
      </article>
    );
  };

  render() {
    return (
      <section id="work">
        {this.workSections.map(this.renderWorkSection, this)}
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
            <a href="http://oincs.com/" target="_blank" className="button">
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
            <a href="http://oincs.com/" target="_blank" className="button">
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

export default Work;
