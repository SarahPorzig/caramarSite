$("#propertyButton").click(function() {
$('html, body').animate({
    scrollTop: $("#propertyDetailsHeading").offset().top - ( $(window).height() - $("#propertyDetailsHeading").outerHeight(true)) / 2
}, 1000);
});
$("#floraAndFaunaButton").click(function() {
$('html, body').animate({
    scrollTop: $("#floraAndFaunaHeading").offset().top - ( $(window).height() - $("#floraAndFaunaHeading").outerHeight(true)) / 2
}, 1000);
});
$("#horsesButton").click(function() {
$('html, body').animate({
    scrollTop: $("#horsesHeading").offset().top - ( $(window).height() - $("#horsesHeading").outerHeight(true)) / 2
}, 1000);
});
$("#historyButton").click(function() {
$('html, body').animate({
    scrollTop: $("#historyHeading").offset().top - ( $(window).height() - $("#historyHeading").outerHeight(true)) / 2
}, 1000);
});
