import React, { Component } from 'react';

import cn from 'classnames';

import WorkSection from './WorkSection';

import {WORK_SECTIONS} from './workSections';

class MobileWork extends Component {
  renderWorkSection(workSection) {
    const mobileWorkClassName = cn(
      'card',
      'card--work',
      `color-${workSection.color}`
    );
    return (
      <WorkSection
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
