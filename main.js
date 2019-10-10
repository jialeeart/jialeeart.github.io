$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    };
  });
});