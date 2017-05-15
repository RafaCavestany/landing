import $ from 'jquery';

const SCROLL_TOLERANCE = 100;

const getElementsHeight = function($elements) {
  let totalHeight = 0;
  $elements.each(function() {
    totalHeight += $(this).outerHeight();
  });
  return totalHeight;
};

const getDistance = function($elements, currentIndex) {
  let totalHeight = 0;
  $elements.each(function(index) {
    if (index < currentIndex) {
      totalHeight += $(this).outerHeight();
    }
  });
  return totalHeight;
};

// This code is based on this pen: https://codepen.io/daveredfern/pen/zBGBJV
$(document).ready(function() {
  const $workContainer = $('.js-scrollable-color-container');
  const $panel = $('.js-scrollable-color');

  $workContainer.addClass('color-' + $panel.data('color'));
});

$(window).scroll(function() {
  const $window = $(window);
  const $workSections = $('.js-scrollable-color');
  const $workContainer = $('.js-scrollable-color-container');
  //
  let cur_pos = $window.scrollTop();
  // First section only needs to be scrolled half.
  const height = $('.js-scrollable-section').outerHeight();
  const firstSectionScroll = height / 2;
  const firstSectionDistance = firstSectionScroll + SCROLL_TOLERANCE;
  // After second section its not necessary
  const secondSectionScroll = firstSectionScroll + height
  const secondSectionDistance = secondSectionScroll + SCROLL_TOLERANCE;
  const thirdSectionScroll = getElementsHeight($workSections);
  const $scrollableFooter = $('.js-scrollable-footer');
  const footerHeight = getElementsHeight($scrollableFooter);
  const thirdSectionDistance = secondSectionDistance + thirdSectionScroll;

  $workSections.each(function(index) {
    const $this = $(this);
    if (cur_pos >= secondSectionDistance && cur_pos < thirdSectionDistance) {
      const workDistance = cur_pos - secondSectionScroll;
      let top = getDistance($workSections, index);
      let bottom = getDistance($workSections, index + 1);
      if (index === 0) {
        bottom -= 300;
      } else {
        top -= 300;
      }
      if (workDistance >= top && workDistance < bottom) {
        // Remove all classes on body with color-
        $workContainer.removeClass(function(index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
        });

        // Add class of currently active div
        $workContainer.addClass('color-' + $this.data('color'));
      }
    }
  });
}).scroll();
