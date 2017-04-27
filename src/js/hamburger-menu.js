$(document).ready(function() {
  $('.js-hamburger-menu').click(function() {
    $(this).toggleClass('active');
    $('.js-menu-overlay').toggleClass('active');
  });
});
