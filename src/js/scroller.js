'use strict';
// Define funcs
const getDownArrowChild = function($ancestor) {
  return $ancestor.getElementsByClassName('js-scroll-down')[0];
};

const getElementInfo = function($element) {
  return $element.getBoundingClientRect();
};

const scrollDown = function($section, index) {
  console.log(`Navigation from: ${index} to ${index + 1}`);
  // We modify the current div
  if (index === 0 || index !== 0) { // TODO: ofc delete code after ||
    // if its the first page, we only need to scroll half of the height
    // of the container
    const SCROLL_TOLERANCE = 100;
    const sectionHeight = getElementInfo($section).height + SCROLL_TOLERANCE;
    $section.style.top = `${sectionHeight * -1}px`;
  }
};

const scrollUp = function($section, index) {
  console.log(`Navigation from ${index} to: ${index-1}`);
  // We modify the next div
  if (index === 0 || index !== 0) { // TODO: ofc delete code after ||
    // if its the first page, we only need to scroll half of the height
    // of the container
    const sectionHeight = getElementInfo($section).height;
    $section.style.top = `0`;
  }
};

// Trigger docReady
window.onload = function() {
  const $scrollableSections = document.getElementsByClassName('js-scrollable-section');
  Array.from($scrollableSections).forEach(function($element, index, array) {
    let $downArrow;
    if (index === 0) {
      // Get downArrow
      $downArrow = getDownArrowChild($element);
      // TODO: nav: hide_top_arrow
      // TODO: nav: set_current_section_name
      // TODO: set base color?
    }
    // If downArrow is defined, add event listener
    if ($downArrow) {
      $downArrow.addEventListener('click', function(e) {
        e.preventDefault();
        scrollDown($element, index);
      });
    }
  });
  // FOR NOW there is only one arrow up:
  const $arrowDown = document.getElementsByClassName('js-scroll-up')[0];
  $arrowDown.addEventListener('click', function(e) {
    e.preventDefault();
    // and belongs to the second view
    const secondViewIndex = 1;
    scrollUp($scrollableSections[secondViewIndex-1], secondViewIndex-1);
  })
};
