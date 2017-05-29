import $ from 'jquery';

import {SCROLL_TOLERANCE, getElementsHeight} from './scrollable-helper';

const getScrollableTollerance = function() {
  const scrollableCount = $('.js-scrollable').length;
  return scrollableCount * SCROLL_TOLERANCE;
};

const setBodyHeight = function() {
  const $body = $('body');
  // Intro and about:
  const $scrollableSections = $('.js-scrollable-section');
  const sectionsHeight = getElementsHeight($scrollableSections);
  // Work section (main)
  const $workSections = $('.js-scrollable-color');
  const workSectionsHeight = getElementsHeight($workSections);
  // Footer
  const $scrollableFooter = $('.js-scrollable-footer');
  const footerHeight = getElementsHeight($scrollableFooter);
  // Tollerance:
  const totalTollerance = getScrollableTollerance();
  // Math:
  const composedHeight = sectionsHeight +
                         workSectionsHeight +
                         footerHeight +
                         totalTollerance;

  $body.css({
    'height': composedHeight,
    'overflow-x': 'hidden'
  });
};

const clearBodyHeight = function() {
  const $body = $('body');
  $body.css({
    'height': '',
    'overflow-x': ''
  });
}

export {
  setBodyHeight,
  clearBodyHeight
}
