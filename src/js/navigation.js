// This code is based on this pen: https://codepen.io/daveredfern/pen/zBGBJV
$(document).ready(function() {
  var $arrowUp = $('.js-arrow-up');
  $arrowUp.addClass('hidden');
});

$(window).scroll(function() {
  navigate();
}).scroll();

function navigate() {
  var $window = $(window),
    $sections = $('.js-section');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);

  $sections.each(function() {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      var section = $(this).data('name');

      // First page
      if (section === 'intro') {
        var $arrowUp = $('.js-arrow-up');
        $arrowUp.addClass('hidden');
      }

      if (section !== 'intro') {
        var $arrowUp = $('.js-arrow-up');
        $arrowUp.removeClass('hidden');
      }

      // Last page
      if (section === 'project') {
        var $arrowDown = $('.js-arrow-down');
        $arrowDown.addClass('hidden');
      }

      if (section !== 'project') {
        var $arrowDown = $('.js-arrow-down');
        $arrowDown.removeClass('hidden');
      }
    }
  });
}
