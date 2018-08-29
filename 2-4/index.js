$(function() {
  var interval;

  $('.main').hover(function() {
    interval = setInterval(function() {
      $('.main').text(Number($('.main').text()) + 1);
    }, 100);
  }, function() {
    clearInterval(interval);
  });
});
