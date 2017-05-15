import React, { Component } from 'react';

import cn from 'classnames';

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
      },
      {
        name: 'cab2ride',
        roles: ['Project Manager', 'Designer'],
        description: `With Cab2ride you can book a taxi from your any smartphone in just
                      one click and in seconds. The app uses GPS technology to directly
                      connect you with the nearest driver right when you need it.`,
        buttons: [
          {
            name: 'Appstore',
            link: 'http://oincs.com/'
          },
          {
            name: 'Playstore',
            link: 'http://oincs.com/'
          }
        ],
        color: 'black'
      },
      {
        name: 'itau',
        roles: ['Product Manager', 'Designer'],
        description: `With Cab2ride you can book a taxi from your any smartphone in just
                      one click and in seconds. The app uses GPS technology to directly
                      connect you with the nearest driver right when you need it.`,
        buttons: [
          {
            name: 'Website',
            link: 'http://oincs.com/'
          }
        ],
        color: 'white'
      },
      {
        name: 'yts',
        roles: ['Designer'],
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
        color: 'black'
      },
      {
        name: 'pagoo',
        roles: ['Designer'],
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
        color: 'green'
      },
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
    const {isMobile} = this.props;
    const workContainerClassName = cn(
      'card',
      'card--work',
      isMobile ? `color-${workSection.color}` : 'js-scrollable-color'
    );
    return (
      <article
        id={workSection.name}
        key={workSection.name}
        className={workContainerClassName}
        data-color={workSection.color}
      >
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
      </section>
    );
  }
}

export default Work;
