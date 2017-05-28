import React, { Component } from 'react';

import cn from 'classnames';

import WorkSection from './WorkSection';

import {WORK_SECTIONS} from './workSections';

class MobileWork extends Component {
  renderWorkSection(workSection) {
    const mobileWorkClassName = cn(
      'c-card',
      'c-card--work',
      `t-color-${workSection.color}`
    );
    return (
      <WorkSection
        key={workSection.name}
        workSection={workSection}
        workSectionClassName={mobileWorkClassName}
      />
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
