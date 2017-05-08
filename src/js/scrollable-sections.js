const SCROLL_DELAY = 100;
// Save lastPosition to know our scroll;
let lastPosition;
// Save current section
let currentSection;
// Save scrollDirection to know where we're going.
let scrollDirection;


$(document).ready(function() {
  const $body = $('body');
  const $scrollableContent = $('.js-scrollable-content');

  // Here we calculate the total height of the body by calculating
  // the height of the scrollableSections and the scrollableContent.
  setBodyHeight(getElementsHeight($scrollableContent));
});

function setBodyHeight(newHeight, type) {
  const $body = $('body');
  $body.css('height', newHeight);
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
  let $window = $(window),
      $scrollableSections = $('.js-scrollable-section'),
      $scrollableContent = $('.js-scrollable-content'),
      $blackout = $('.js-blackout');

  const cur_pos = $(this).scrollTop();

  // Check for scroll direction
  if (lastPosition > cur_pos) {
    scrollDirection = 'up';
  } else {
    scrollDirection = 'down';
  }

  let totalHeight;

  $blackout.removeClass('active');

  $scrollableSections.each(function(index, currentSection) {
    const $currentSection = $(currentSection);
    let height = $currentSection.outerHeight();

    // The first scroll only needs to be half of the height
    // TODO: why????
    if(index === 0) {
      height = height / 2;
    }

    if (cur_pos < height + SCROLL_DELAY) {
      //
      handleNewSectionScroll(cur_pos, scrollDirection, this);
      //
      $scrollableContent.removeClass('active')
                        .addClass('scrolling');
      //
      $currentSection.addClass('scrolling');
    } else {
      //
      $scrollableContent.addClass('active')
                        .removeClass('scrolling');
      //
      $currentSection.removeClass('scrolling');
    }
  });

  lastPosition = cur_pos;
}

// When a new section is selected, do whatever is necessary
function handleNewSectionScroll(newScroll, scrollDirection, element) {
  const $element = $(element);
  const $scrollableContent = $('.js-scrollable-content');

  $element.css('top', newScroll * -1);
}
