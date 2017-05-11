// We set an SCROLL_TOLERANCE of 100 so we don't scroll
// to new sections right away.
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

// Receives a value and a max value, and receives
// value's respective percentage in between a range from 0 to max
// example:
//
// getPercentageByRange(240, 0, 480)
// => 50%;
//
const getPercentageByRange = function(val, min, max) {
  const range = max - min;
  return parseInt(((val - min) / range) * 100);
};

// Reversed percentage is needed when you, have for example a value: 64,
// and you want to know what is the remaining value to get to 100.
const getReversedPercentage = function(percentage) {
  return 100 - percentage;
};

const getOpacity = function(value) {
  // we receive the percentage of how much we want it visible.
  // so for example, if we want 64% of visibility, we need to set
  // an opacity of 0.36, which will be 36% (100 - 64%)
  // ^ that value is given by getReversedPercentage
  value = getReversedPercentage(value);
  // Changes value to base 1
  return value / 100;
};

// Receives a value from 0 to 100 representing how much the div is visible,
// changes $blackout's opacity based on that.
// Receives zIndex as well.
const setBlackoutOpacity = function(value, zIndex) {
  const $blackout = $('.js-blackout');
  const newOpacity = getOpacity(value);
  $blackout.css({
    'opacity': newOpacity,
    'z-index': zIndex
  });
};

// Receives a value from 0 to 100 representing how much the div is visible,
// changes $blackout's opacity based on that.
const setFooterBlackoutOpacity = function(value) {
  const $footerBlackout = $('.js-footer-blackout');
  const newOpacity = getOpacity(value);
  $footerBlackout.css({
    'opacity': newOpacity
  });
};

// When a new scrollable section is scrolled, we change its top based
// on the scrolled count.
const handleNewSectionScroll = function(element, scroll) {
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
  const $body = $('body');
  const $blackout = $('.js-blackout');
  const $scrollableSections = $('.js-scrollable-section');
  const cur_pos = $(this).scrollTop();

  $scrollableSections.each(function(index) {
    const $currentSection = $(this);
    const scrollableContent = $('.js-scrollable-content')[index];
    const height = $currentSection.outerHeight();
    const halfHeight = height / 2;
    // First section only needs to be scrolled half.
    const firstSectionDistance = halfHeight + SCROLL_TOLERANCE;

    if(index === 0) {
      if (cur_pos < firstSectionDistance) {
        // We let them scroll until halfHeight + SCROLL_TOLERANCE
        handleNewSectionScroll($currentSection, cur_pos);

        $(scrollableContent).removeClass('active')
        .css('top', '0');

        // But we don't include the tollerance to hide the blackout
        if (cur_pos < firstSectionDistance - SCROLL_TOLERANCE) {
          const minValue = index * halfHeight;
          const visiblePercentage = getPercentageByRange(
            cur_pos,
            minValue,
            halfHeight
          );
          setBlackoutOpacity(visiblePercentage, 75);
        } else {
          setBlackoutOpacity(100, 75);
        }

      } else {
        $(scrollableContent).addClass('active')
        .css('top', withTolerance(getContentTop(halfHeight, index)));
      }
    } else if (index === 1) {
      // TODO: explain this
      const math = getContentTop(halfHeight, index + 1);
      const secondSectionDistance = withTolerance(math, index);
      const thirdSectionDistance = $body.height() - (halfHeight * 5);

      if (cur_pos >= firstSectionDistance && cur_pos < secondSectionDistance) {
        $(scrollableContent).removeClass('active')
        .removeClass('bottom')
        .css('top', '0');
        if (cur_pos < secondSectionDistance - SCROLL_TOLERANCE) {
          const minValue = index * firstSectionDistance;
          const visiblePercentage = getPercentageByRange(
            cur_pos,
            minValue,
            secondSectionDistance - SCROLL_TOLERANCE
          );
          setBlackoutOpacity(visiblePercentage, 65);
        } else {
          setBlackoutOpacity(100, 65);
        }
      } else if (cur_pos >= secondSectionDistance && cur_pos < thirdSectionDistance) {
        $(scrollableContent).addClass('active')
        .removeClass('bottom')
        .css('top', withTolerance(getContentTop(halfHeight, index)));
      } else {
        $(scrollableContent).addClass('bottom');

        if (cur_pos >= thirdSectionDistance && cur_pos < thirdSectionDistance + height) {
          const minValue = thirdSectionDistance;
          const visiblePercentage = getPercentageByRange(
            cur_pos,
            minValue,
            thirdSectionDistance + height
          );
          setFooterBlackoutOpacity(visiblePercentage);
        } else {
          setFooterBlackoutOpacity(100);
        }
      }
    }
  });
};

const getElementsHeight = function($elements) {
  let totalHeight = 0;
  $elements.each(function() {
    totalHeight += $(this).height();
  });
  return totalHeight;
};

const getContentsTollerance = function() {
  const contentsLenght = $('.js-scrollable-content').length;
  return contentsLenght * SCROLL_TOLERANCE;
};

const setBodyHeight = function() {
  const $body = $('body');
  const $scrollableSections = $('.js-scrollable-section');
  const $scrollableContents = $('.js-scrollable-content');
  const $scrollableFooter = $('.js-scrollable-footer');

  const sectionsHeight = getElementsHeight($scrollableSections) * ($scrollableSections.length + 0.5);
  const contentsHeight = getElementsHeight($scrollableContents);
  const footerHeight = getElementsHeight($scrollableFooter);

  const totalTolerance = getContentsTollerance();
  const composedHeight = sectionsHeight + contentsHeight + totalTolerance + footerHeight;
  $body.css('height', `${composedHeight}px`);
};

$(document).ready(function() {
  // Here we calculate the total height of the body by calculating
  // the height of the scrollableSections and the scrollableContents.
  setBodyHeight();

  // bind events:
  $(this).scroll(function() {
    handleScroll();
  });
});
