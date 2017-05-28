import React, { Component } from 'react';

import Button from '../Button';

class WorkSection extends Component {
  getRolesString(roles) {
    let rolesString = ``;
    roles.map(function(role, index) {
      if (index === 0) {
        rolesString += `${role}`;
      } else {
        rolesString += ` / ${role}`;
      }
    });
    return rolesString;
  };

  renderButtons(buttons, sectionName) {
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

  render() {
    const { workSection, workSectionClassName } = this.props;

    return (
      <article
        id={workSection.name}
        key={workSection.name}
        className={workSectionClassName}
        data-color={workSection.color}
      >
        <div className="card__container">
          <h2 className="card__title">
            {workSection.name}
          </h2>
          <label className="card__label">
            {`ROLES: ${this.getRolesString(workSection.roles)}`}
          </label>
          <hr className="card__line-break"></hr>
          <p className="card__paragraph">
            {workSection.description}
          </p>
          {this.renderButtons(workSection.buttons, workSection.name)}
        </div>
        <figure className={`card__image card__image--${workSection.name}`}>
        </figure>
      </article>
    );
  };
}

export default WorkSection;
