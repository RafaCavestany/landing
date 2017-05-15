import React, { Component } from 'react';

import cn from 'classnames';

import {WORK_SECTIONS} from './workSections';

class Work extends Component {
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
    return (
      <article
        id={workSection.name}
        key={workSection.name}
        className="card card--work js-work js-scrollable-color"
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
        {WORK_SECTIONS.map(this.renderWorkSection, this)}
      </section>
    );
  }
}

export default Work;
