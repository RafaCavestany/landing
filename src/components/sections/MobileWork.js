import React, { Component } from 'react';

import cn from 'classnames';

import Button from '../Button';

import {WORK_SECTIONS} from './workSections';

class MobileWork extends Component {
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
        <Button
          key={`btn-${sectionName}-${index}`}
          link={button.link}
          name={button.name}
        />
      );
    });
  };

  renderWorkSection(workSection) {
    const mobileWorkClassName = cn(
      'card',
      'card--work',
      `color-${workSection.color}`
    );
    return (
      <article
        id={workSection.name}
        key={workSection.name}
        className={mobileWorkClassName}
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

export default MobileWork;
