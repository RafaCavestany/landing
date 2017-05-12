import $ from 'jquery';

const SCROLL_TOLERANCE = 100;

// Receives a height, and returns that value, multipled
// for the current index, example:
//
// getContentTop(580px, 0);
// => 580px;
// getContentTop(580px, 1);
// => 1060px;
//
const getContentTop = function(height, index) {
  // index + 1 is because all indexes starts from 0
  return (height * (index + 1));
};

// Receives a value, and returns it with + SCROLL_TOLERANCE
// and an index (optional).
//
// example:
// withTolerance(50)
// => 50 + SCROLL_TOLERANCE
// withTolerance(50, 1)
// => 50 + (SCROLL_TOLERANCE * 2)
//
const withTolerance = function(value, index) {
  if (index) {
    return value + (SCROLL_TOLERANCE * (index + 1));
  }
  return value + SCROLL_TOLERANCE;
};

// This code is based on this pen: https://codepen.io/daveredfern/pen/zBGBJV
$(document).ready(function() {
  const $workContainer = $('.js-work-container');
  const $panel = $('.js-work');

  $workContainer.addClass('color-' + $panel.data('color'));
});

$(window).scroll(function() {
  const $window = $(window);
  const $body = $('body');
  const $panels = $('.js-work');
  const $workContainer = $('.js-work-container');
  const cur_pos = $window.scrollTop();

  $panels.each(function(index) {
    const $this = $(this);
    const height = $this.outerHeight();
    const halfHeight = height / 2;
    // First section only needs to be scrolled half.
    const math = getContentTop(halfHeight, 2);
    const secondSectionDistance = withTolerance(math, 1);
    const thirdSectionDistance = $body.height() - (halfHeight * 5);

    if (cur_pos >= secondSectionDistance && cur_pos < thirdSectionDistance) {
      const workDistance = cur_pos - secondSectionDistance;
      const top = (height * index);
      const bottom = (height * (index + 1));
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
