// We set an SCROLL_TOLERANCE of 100 so we don't scroll
// to new sections right away.
const SCROLL_TOLERANCE = 100;

// TODO: remove next, not being used ?
// We save lastPosition to know our scroll;
let lastPosition;
// We save direction to know where we're going.
let direction;


$(document).ready(function() {
  const $body = $('body');
  const $scrollableContents = $('.js-scrollable-content');

  // Here we calculate the total height of the body by calculating
  // the height of the scrollableSections and the scrollableContents.
  setBodyHeight(getElementsHeight($scrollableContents));
});

function setBodyHeight(newHeight, type) {
  const $body = $('body');
  // Following 50vh is because first scrollable section, this needs
  // to be connected to the amount of scrollable sections
  $body.css('height', `calc(((${newHeight} * 1px) + (${SCROLL_TOLERANCE} * 1px)) + 50vh)`);
}

function getElementsHeight($elements) {
  let totalHeight = 0;
  $elements.each(function() {
    totalHeight += $(this).height();
  });
  return totalHeight;
}

$(window).scroll(function() {
  handleScroll();
});

function handleScroll() {
  const $scrollableSections = $('.js-scrollable-section');
  const $scrollableContents = $('.js-scrollable-content');
  const $blackout = $('.js-blackout');

  const cur_pos = $(this).scrollTop();

  // Check for scroll direction
  if (lastPosition > cur_pos) {
    direction = 'up';
  } else {
    direction = 'down';
  }

  $scrollableSections.each(function(index, currentSection) {
    const $currentSection = $(currentSection);
    let height = $currentSection.outerHeight();

    // The first scroll only needs to be half of the height
    // TODO: why????
    if(index === 0) {
      height = height / 2;
    }

    // if index > 0
    // scrolls from top but height does not change

    // if index > 0 && index == $scrollableSections.length
    // scrolls from bottom

    if (cur_pos < height + SCROLL_TOLERANCE) {
      handleNewSectionScroll(this, cur_pos, direction, height);
      $scrollableContents.removeClass('active');
      $blackout.addClass('active');

      if (cur_pos > height && cur_pos < height + SCROLL_TOLERANCE) {
        setBlackoutOpacity(0);
      } else {
        const visiblePercentage = getPercentageByValues(cur_pos, height);
        // opacity is from 1 to 0, instead of 0 to 1, so we need
        // to do 100 - x here.
        setBlackoutOpacity(100 - visiblePercentage);
      }
    } else {
      $scrollableContents.addClass('active');
    }
  });

  lastPosition = cur_pos;
}

// Receives a value from 0 to 100 and translates it to base 1
function setBlackoutOpacity(value) {
  const $blackout = $('.js-blackout');
  value = value / 100;
  $blackout.css('opacity', value);
}

// When a new section is selected, do whatever is necessary
function handleNewSectionScroll(element, scroll, direction, height) {
  const $element = $(element);
  $element.css('top', scroll * -1);
}

function getPercentageByValues(val, max) {
  return parseInt((val * 100) / max);
}
