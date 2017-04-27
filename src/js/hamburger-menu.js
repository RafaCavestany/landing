$(document).ready(function() {
  $('.js-hamburger-menu').click(function() {
    // Clicking on hamburger switches its icon
    $(this).toggleClass('active');
    // set header as active
    $(this).closest('.js-hamburger-container').toggleClass('active');
    // set menu as active
    $('.js-menu-overlay').toggleClass('active');
  });
  $('.js-menu-item').click(function() {
    // Click on an anchor, remove menu overlay
    $('.js-hamburger-menu').removeClass('active');
    $('.js-menu-overlay').removeClass('active');
    $('.js-hamburger-container').removeClass('active');
  });
});
