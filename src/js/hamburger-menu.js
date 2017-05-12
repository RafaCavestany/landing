const handleMenuClick = function(menu) {
  const $menu = $(menu);
  // Clicking on hamburger switches its icon
  $menu.toggleClass('active');
  // set header as active
  $menu.closest('.js-hamburger-container').toggleClass('active');
  // set menu as active
  $('.js-menu-overlay').toggleClass('active');
  $('body').toggleClass('u-overflow-hidden');
};

const handleNavClick = function() {
  // Click on an anchor, remove menu overlay
  $('.js-hamburger-menu').removeClass('active');
  $('.js-menu-overlay').removeClass('active');
  $('.js-hamburger-container').removeClass('active');
}

$(document).ready(function() {
  $('.js-hamburger-menu').click(function() {
    handleMenuClick(this);
  });
  $('.js-menu-item').click(function() {
    handleNavClick();
  });
});

window.onload = function() {
  const $menu = document.getElementsByClassName('js-hamburger-menu');
  Array.from($menu).forEach(function($element, index) {
    console.log($element);
    // $arrowDown.addEventListener('click', function(e) {
    //   e.preventDefault();
    //   // and belongs to the second view
    //   const secondViewIndex = 1;
    //   scrollUp($menu[secondViewIndex-1], secondViewIndex-1);
    // })
  });

};
