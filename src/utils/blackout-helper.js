import $ from 'jquery';

// Receives a value and a max value, and receives
// value's respective percentage in between a range from 0 to max
// example:
//
// getPercentageByRange(240, 0, 480)
// => 50%;
//
const getPercentageByRange = function(val, min, max) {
  const range = max - min;
  return parseInt(((val - min) / range) * 100, 10);
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

module.exports = {
  getPercentageByRange,
  setBlackoutOpacity,
  setFooterBlackoutOpacity
}
