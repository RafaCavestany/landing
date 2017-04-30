$(document).ready(function() {
  const $body = $('body'),
    $scrollableSections = $('.js-scrollable-section'),
    $scrollableContent = $('.js-scrollable-content');

  // Here we calculate the total height of the body by calculating
  // the height of the scrollableSections and the scrollableContent.
  changeBodyHeight(getTotalHeight($scrollableSections, $scrollableContent));
});

function changeBodyHeight(newHeight, type) {
  const $body = $('body');
  $body.css('height', newHeight);
}

function getTotalHeight($sections, $content) {
  return getElementsHeight($sections) + getElementsHeight($content);
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
}).scroll();

// Save lastPosition to know our scroll;
var lastPosition;
// Save current section
var currentSection
// Save scrollDirection to know where we're going.
var scrollDirection;

// We SET 5 as scroll tolerance
const SCROLL_TOLERANCE = 5;

function handleScroll() {
  let $window = $(window),
      $scrollableSections = $('.js-scrollable-section'),
      $scrollableContent = $('.js-scrollable-content');

  const cur_pos = $(this).scrollTop();

  // Check for scroll direction
  if (lastPosition > cur_pos) {
    scrollDirection = 'up';
  } else {
    scrollDirection = 'down';
  }

  let totalHeight;
  if (scrollDirection === 'up') {
    totalHeight = getTotalHeight($scrollableSections, $scrollableContent);
  } else {
    totalHeight = getElementsHeight($scrollableContent);
  }
  changeBodyHeight(totalHeight, 'handleNewSectionScroll');

  $scrollableSections.each(function() {
    const top = $(this).offset().top,
          bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      if (cur_pos + SCROLL_TOLERANCE < $(this).outerHeight() / 2) {
        handleNewSectionScroll(cur_pos, scrollDirection, this);
        $scrollableContent.removeClass('active');
        $scrollableContent.addClass('scrolling');
        console.log(`scrolling ${cur_pos}`);
      } else {
        $scrollableContent.removeClass('scrolling');
        $scrollableContent.addClass('active');
        console.log(`active ${cur_pos}`);
      }
    }
  });

  lastPosition = cur_pos;
}

// When a new section is selected, do whatever is necessary
function handleNewSectionScroll(newScroll, scrollDirection, element) {
  const $element = $(element);
  const $scrollableContent = $('.js-scrollable-content');
  const $scrollableSections = $('.js-scrollable-sections');

  $element.css('top', newScroll * -1);
  $scrollableContent.css('top', newScroll);
}
