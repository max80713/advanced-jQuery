$(function() {
  $('.box').hover(function(e) {
    $(this).find('.mask').stop(false, false).animate({
      top: '-300px'
    })
  }, function() {
    $(this).find('.mask').stop(false, false).animate({
      top: '0'
    })
  });
});
