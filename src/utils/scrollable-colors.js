import $ from 'jquery';

import {
  getSecondSectionDistance,
  getThirdSectionDistance,
  getScrollableTollerance
} from './scrollable-helper';

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

  $workContainer.addClass('t-color-' + $panel.data('color'));
});

$(window).scroll(function() {
  const $window = $(window);
  const $workSections = $('.js-scrollable-color');
  const $workContainer = $('.js-scrollable-color-container');

  const cur_pos = $window.scrollTop();
  const $section = $('.js-scrollable-section');
  const secondSectionScroll = getSecondSectionDistance($section, false);
  const secondSectionDistance = getSecondSectionDistance($section, true);
  const thirdSectionScroll = getThirdSectionDistance();
  const thirdSectionDistance = secondSectionDistance + thirdSectionScroll;

  const totalTollerance = getScrollableTollerance();

  $workSections.each(function(index) {
    const $this = $(this);
    if (cur_pos >= secondSectionDistance && cur_pos < thirdSectionDistance) {
      const workDistance = cur_pos - secondSectionScroll;
      let top = getDistance($workSections, index);
      let bottom = getDistance($workSections, index + 1);
      if (index === 0) {
        bottom -= totalTollerance;
      } else {
        top -= totalTollerance;
      }
      if (workDistance >= top && workDistance < bottom) {
        // Remove all classes on body with t-color-
        $workContainer.removeClass(function(index, css) {
          return (css.match(/(^|\s)t-color-\S+/g) || []).join(' ');
        });

        // Add class of currently active div
        $workContainer.addClass('t-color-' + $this.data('color'));
      }
    }
  });
}).scroll();
