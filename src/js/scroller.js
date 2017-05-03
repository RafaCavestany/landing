'use strict';

// Define funcs
const getDownArrowChild = function($ancestor) {
  return $ancestor.getElementsByClassName('js-scroll-to-content')[0];
}

const scrollToContentHandler = function($scrollableSection, index) {
  $scrollableSection.classList.add('hidden');
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
    }
    // If downArrow is defined, add event listener
    if ($downArrow) {
      $downArrow.addEventListener('click', function() {
        scrollToContentHandler($element, index);
      });
    }
  });
};
