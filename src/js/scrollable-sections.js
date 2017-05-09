// We set an SCROLL_TOLERANCE of 100 so we don't scroll
// to new sections right away.
const SCROLL_TOLERANCE = 100;

// TODO: next wrapped vars are not being used
// ================================================
// We save lastPosition to know our scroll;
let lastPosition;
// We save direction to know where we're going.
let direction;
// ================================================

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

// Receives a value and a max value, and receives
// value's respective percentage in between a range from 0 to max
// example:
//
// getPercentageByValues(240, 480)
// => 50%;
//
const getPercentageByValues = function(val, max) {
  return parseInt((val * 100) / max);
};

// Receives a value from 0 to 100, translates it to base 1
// and changes $blackout's opacity.
const setBlackoutOpacity = function(value) {
  const $blackout = $('.js-blackout');
  value = value / 100;
  $blackout.css('opacity', value);
};

// When a new scrollable section is scrolled, we change its top based
// on the scrolled count.
const handleNewSectionScroll = function(element, scroll, direction) {
  const $element = $(element);
  scroll = scroll * - 1;
  $element.css('top', scroll);
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

const handleScroll = function() {
  const $scrollableSections = $('.js-scrollable-section');
  const $blackout = $('.js-blackout');

  const cur_pos = $(this).scrollTop();

  // Check for scroll direction
  if (lastPosition > cur_pos) {
    direction = 'up';
  } else {
    direction = 'down';
  }

  $scrollableSections.each(function(index) {
    const $currentSection = $(this);
    let height = $currentSection.outerHeight();
    const scrollableContent = $('.js-scrollable-content')[index];
    // TODO: find out why we need to divide height / 2
    height = height / 2;
    const heighthWithTolerance = withTolerance(height);

    if(index === 0) {
      if (cur_pos < heighthWithTolerance) {
        handleNewSectionScroll($currentSection, cur_pos, direction);
        $(scrollableContent).removeClass('active')
        .css('top', '0');

        if (cur_pos > height && cur_pos < heighthWithTolerance) {
          setBlackoutOpacity(0);
        } else {
          const visiblePercentage = getPercentageByValues(cur_pos, height);
          // opacity is from 1 to 0, instead of 0 to 1, so we need
          // to do 100 - x here.
          setBlackoutOpacity(100 - visiblePercentage);
        }
      } else {
        $(scrollableContent).addClass('active')
        .css('top', withTolerance(getContentTop(height, index)));
      }
    } else if (index === 1) {
      const math = getContentTop(height, index + 1);
      if (cur_pos >= heighthWithTolerance && cur_pos < withTolerance(math, index)) {
        $(scrollableContent).removeClass('active')
        .css('top', '0');
      } else if (cur_pos >= heighthWithTolerance) {
        $(scrollableContent).addClass('active')
        .css('top', withTolerance(getContentTop(height, index)));
      }
    }
  });

  lastPosition = cur_pos;
};

const getElementsHeight = function($elements) {
  let totalHeight = 0;
  $elements.each(function() {
    totalHeight += $(this).height();
  });
  return totalHeight;
};

const getContentsHeight = function() {
  const contentsLenght = $('.js-scrollable-content').length;
  return contentsLenght * 50;
};

const getContentsScrollTolerance = function() {
  const contentsLenght = $('.js-scrollable-content').length;
  return contentsLenght * SCROLL_TOLERANCE;
};

const setBodyHeight = function(newHeight, type) {
  const $body = $('body');
  // Following 50vh is because first scrollable section, this needs
  // to be connected to the amount of scrollable sections
  // TODO: review this: not working!!!
  $body.css('height', `calc((${newHeight}px + ${getContentsScrollTolerance()}px) + ${getContentsHeight()}vh)`);
};

$(document).ready(function() {
  const $body = $('body');
  const $scrollableContents = $('.js-scrollable-content');

  // Here we calculate the total height of the body by calculating
  // the height of the scrollableSections and the scrollableContents.
  setBodyHeight(getElementsHeight($scrollableContents));

  // bind events:
  $(this).scroll(function() {
    handleScroll();
  });
});
