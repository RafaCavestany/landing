// This code is based on this pen: https://codepen.io/daveredfern/pen/zBGBJV
$(document).ready(function() {
  const $scrollableSections = $('.scrollable-section'),
        $scrollablePanel = $('.js-scrollable-panel');
  $scrollableSections.addClass('color-' + $scrollablePanel.data('color'));
});

$(window).scroll(function() {
  const $window = $(window),
    $body = $('body'),
    $panels = $('.js-panel'),
    $scrollablePanel = $('.js-scrollable-panel'),
    $scrollableContent = $('.js-scrollable-content');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  const scroll = $window.scrollTop() + ($window.height() / 3);

  $panels.each(function() {
    const $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll const.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $scrollableContent.removeClass(function(index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $scrollableContent.addClass('color-' + $(this).data('color'));
    }
  });
}).scroll();
