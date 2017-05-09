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
  // TODO: review this: not working!!!
  $body.css('height', `calc((${newHeight}px + ${getContentsScrollTolerance()}px) + ${getContentsHeight()}vh)`);
}

function getContentsScrollTolerance() {
  const contentsLenght = $('.js-scrollable-content').length;
  return contentsLenght * SCROLL_TOLERANCE;
}

function getContentsHeight() {
  const contentsLenght = $('.js-scrollable-content').length;
  return contentsLenght * 50;
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
    // why?
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
}

function getContentTop(height, index) {
  return (height * (index + 1));
}

function withTolerance(value, index) {
  if (index) {
    return value + (SCROLL_TOLERANCE * (index + 1));
  }
  return value + SCROLL_TOLERANCE;
}

// Receives a value from 0 to 100 and translates it to base 1
function setBlackoutOpacity(value) {
  const $blackout = $('.js-blackout');
  value = value / 100;
  $blackout.css('opacity', value);
}

// When a new section is selected, do whatever is necessary
function handleNewSectionScroll(element, scroll, direction) {
  const $element = $(element);
  scroll = scroll * - 1;
  $element.css('top', scroll);
}

function getPercentageByValues(val, max) {
  return parseInt((val * 100) / max);
}
