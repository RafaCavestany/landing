// We set an SCROLL_TOLERANCE of 100 so we don't scroll
// to new sections right away.
const SCROLL_TOLERANCE = 100;

// TODO: remove next, not being used ?
// We save lastPosition to know our scroll;
let lastPosition;
// We save scrollDirection to know where we're going.
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
  const $scrollableSections = $('.js-scrollable-section');
  const $scrollableContent = $('.js-scrollable-content');

  const cur_pos = $(this).scrollTop();

  // Check for scroll direction
  if (lastPosition > cur_pos) {
    scrollDirection = 'up';
  } else {
    scrollDirection = 'down';
  }

  let totalHeight;

  $scrollableSections.each(function(index, currentSection) {
    const $currentSection = $(currentSection);
    let height = $currentSection.outerHeight();

    // The first scroll only needs to be half of the height
    // TODO: why????
    if(index === 0) {
      height = height / 2;
    }

    if (cur_pos < height + SCROLL_TOLERANCE) {
      handleNewSectionScroll(cur_pos, scrollDirection, this);
      $scrollableContent.removeClass('active');
    } else {
      $scrollableContent.addClass('active');
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
