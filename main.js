// window.$ = document.querySelectorAll.bind(document)

// document.querySelector(document).ready(function() {
  
//   document.querySelector(window).scroll(function() {
    
//     if (document.querySelector(window).scrollTop() > 50) {
//       document.querySelector('nav').addClass('scrolled');
//     } else {
//       document.querySelector('nav').removeClass('scrolled');
//     };
//   });
// });

$(document).ready(function() {
  
  $(window).scroll(function() {
    
    if ($(window).scrollTop() > 50) {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    };
  });
});