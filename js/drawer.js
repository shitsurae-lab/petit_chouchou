$(function() {
  $('.c-navbar__toggle').on('click', function() {
    $(this).toggleClass('open');
    $('.c-header__nav').toggleClass('open');
    $('.slideshow').toggleClass('open');

  });
});
