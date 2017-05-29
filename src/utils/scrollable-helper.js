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

const getHeight = function(element) {
  return $(element).outerHeight();
}

const getElementsHeight = function($elements) {
  let totalHeight = 0;
  $elements.each(function() {
    totalHeight += getHeight($(this));
  });
  return totalHeight;
};

const getFirstSectionDistance = function(element, scroll) {
  const height = getHeight(element);
  let firstSectionDistance = height / 2;
  if (scroll) {
    firstSectionDistance += SCROLL_TOLERANCE;
  }
  return firstSectionDistance;
};

const getSecondSectionDistance = function(element, scroll) {
  const height = getHeight(element);
  let secondSectionDistance = getFirstSectionDistance(
    element,
    true
  ) + height;
  if (scroll) {
    secondSectionDistance += SCROLL_TOLERANCE;
  }
  return secondSectionDistance;
};

const getThirdSectionDistance = function(scroll) {
  const $workSections = $('.js-scrollable-color');
  let thirdSectionDistance = getElementsHeight($workSections);
  return thirdSectionDistance;
};

module.exports = {
  SCROLL_TOLERANCE,
  getHeight,
  getContentTop,
  getElementsHeight,
  getFirstSectionDistance,
  getSecondSectionDistance,
  getThirdSectionDistance
}
