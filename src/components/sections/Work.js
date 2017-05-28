import React, { Component } from 'react';

import cn from 'classnames';

import WorkSection from './WorkSection';

import {WORK_SECTIONS} from './workSections';

class Work extends Component {
  renderWorkSection(workSection) {
    const workSectionClassName = cn(
      'card',
      'card--work',
      'js-work',
      'js-scrollable-color'
    );
    return (
      <WorkSection
        workSection={workSection}
        workSectionClassName={workSectionClassName}
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

export default Work;
