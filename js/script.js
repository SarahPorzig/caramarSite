$(document).ready(function() {

  $(".propertyButton").click(function() {
  $('html, body').animate({
      scrollTop: $("#propertyDetailsHeading").offset().top - ( $(window).height() - $("#propertyDetailsHeading").outerHeight(true)) / 2
  }, 1000);
  });
  $(".wildlifeButton").click(function() {
  $('html, body').animate({
      scrollTop: $("#wildlifeHeading").offset().top - ( $(window).height() - $("#wildlifeHeading").outerHeight(true)) / 2
  }, 1000);
  });
  $(".horsesButton").click(function() {
  $('html, body').animate({
      scrollTop: $("#horsesHeading").offset().top - ( $(window).height() - $("#horsesHeading").outerHeight(true)) / 2
  }, 1000);
  });
  $(".historyButton").click(function() {
  $('html, body').animate({
      scrollTop: $("#historyHeading").offset().top - ( $(window).height() - $("#historyHeading").outerHeight(true)) / 2
  }, 1000);
  });

  $(".backToTop").click(function() {
  $('html, body').animate({
      scrollTop: $("#brand").offset().top
    }, 1000);
  });

  /* changes breakpoint of navbar to medium rather than small - works with media query in css doc*/
  $('#monitor').html($(window).width());

  $(window).resize(function() {
      var viewportWidth = $(window).width();
      $('#monitor').html(viewportWidth);
  });

  $('.nav a').on('click', function(){
      $('.navbar-toggle').click()
  });

});
