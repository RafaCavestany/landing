import $ from 'jquery';

// We set an SCROLL_TOLERANCE of 100 so we don't scroll
// to new sections right away.
const SCROLL_TOLERANCE = 100;

const getElementsHeight = function($elements) {
  let totalHeight = 0;
  $elements.each(function() {
    totalHeight += $(this).outerHeight();
  });
  return totalHeight;
};

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
  const $workSections = $('.js-work');
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
  $body.css('height', `${composedHeight}px`);
};

const clearBodyHeight = function() {
  const $body = $('body');
  $body.css('height', '');
}

export {
  setBodyHeight,
  clearBodyHeight
}
