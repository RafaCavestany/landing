import $ from 'jquery';

import {
  SCROLL_TOLERANCE,
  getHeight,
  getContentTop,
  getFirstSectionDistance,
  getSecondSectionDistance,
  getThirdSectionDistance
} from './scrollable-helper';

import {
  setBlackoutOpacity,
  getPercentageByRange,
  setFooterBlackoutOpacity
} from './blackout-helper';

// When a new scrollable section is scrolled, we change its top based
// on the scrolled count.
const handleNewSectionScroll = function(element, scroll) {
  const $element = $(element);
  scroll *= - 1;
  $element.css('top', scroll);
};

const handleScroll = function(element) {
  const $scrollableSections = $('.js-scrollable-section');
  const cur_pos = $(element).scrollTop();

  $scrollableSections.each(function(index) {
    const $section = $(this);
    const $scrollableContent = $('.js-scrollable-content')[index];

    const height = getHeight($section);
    const firstSectionScroll = getFirstSectionDistance($section, false);
    const firstSectionDistance = getFirstSectionDistance($section, true);
    const secondSectionScroll = getSecondSectionDistance($section, false);
    const secondSectionDistance = getSecondSectionDistance($section, true);
    const thirdSectionScroll = getThirdSectionDistance();
    const $scrollableFooter = $('.js-scrollable-footer');
    const footerHeight = getHeight($scrollableFooter);
    const thirdSectionDistance = secondSectionDistance + thirdSectionScroll - footerHeight;

    if(index === 0) {
      if (cur_pos < firstSectionDistance) {
        // We let them scroll until firstSectionScroll + SCROLL_TOLERANCE
        handleNewSectionScroll($section, cur_pos);

        $($scrollableContent).removeClass('active')
        .css('top', '0');

        // But we don't include the tollerance to hide the blackout
        if (cur_pos < firstSectionScroll) {
          const minValue = index * firstSectionScroll;
          const visiblePercentage = getPercentageByRange(
            cur_pos,
            minValue,
            firstSectionScroll
          );
          setBlackoutOpacity(visiblePercentage, 75);
        } else {
          setBlackoutOpacity(100, 75);
        }

      } else {
        $($scrollableContent).addClass('active')
        .css('top', getContentTop(firstSectionScroll, index) + SCROLL_TOLERANCE);
      }
    } else if (index === 1) {
      if (cur_pos >= firstSectionDistance && cur_pos < secondSectionDistance) {
        $($scrollableContent).removeClass('active')
        .removeClass('bottom')
        .css('top', '0');
        if (cur_pos < secondSectionScroll) {
          const minValue = index * firstSectionDistance;
          const visiblePercentage = getPercentageByRange(
            cur_pos,
            minValue,
            secondSectionScroll
          );
          setBlackoutOpacity(visiblePercentage, 65);
        } else {
          setBlackoutOpacity(100, 65);
        }
      } else if (cur_pos >= secondSectionDistance && cur_pos < thirdSectionDistance) {
        $($scrollableContent).addClass('active')
        .removeClass('bottom')
        .css('top', getContentTop(firstSectionScroll, index) + SCROLL_TOLERANCE);
      } else {
        $($scrollableContent).addClass('bottom');

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

$(document).ready(function() {
  // bind events:
  $(this).scroll(function() {
    handleScroll(this);
  });
});
