$(function() {
 let header = $('.header');
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 75) {
    header.addClass('header_fixed');
   } else {
    header.removeClass('header_fixed');
   }
 });
});