'use strict';

// Define funcs
const getDownArrowChild = function($ancestor) {
  return $ancestor.getElementsByClassName('js-scroll-to-content')[0];
};

const getElementInfo = function($element) {
  return $element.getBoundingClientRect();
};

const scrollToContentHandler = function($section, index) {
  if (index === 0) {
    // if its the first page, we only need to scroll half of the height
    // of the container
    const sectionHeight = getElementInfo($section).height;
    $section.style.top = `${sectionHeight * -1}px`;
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
        scrollToContentHandler($element, index);
      });
    }
  });
};
