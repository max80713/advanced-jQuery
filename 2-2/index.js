$(function() {
  var interval;

  $('.button-increase').mousedown(function(e) {
    interval = setInterval(function() {
      $('.main').text(Number($('.main').text()) + 1);
    }, 100);
  }).mouseup(function(e) {
    clearInterval(interval);
  });

  $('.button-decrease').mousedown(function(e) {
    interval = setInterval(function() {
      $('.main').text(Number($('.main').text()) - 1);
    }, 500);
  }).mouseup(function(e) {
    clearInterval(interval);
  });
});
