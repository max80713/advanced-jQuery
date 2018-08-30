$(function() {
  $('.outer').hover(function(e) {
    $('<div></div>').addClass('color').css({
      position: 'fixed',
      width: $(this).width(),
      height: $(this).height(),
      background: $(this).css('background'),
      top: $(this).position().top + 40 + 'px',
      left: $(this).position().left + 40 + 'px',
      transform: 'translate(-50%, -50%)',
      'z-index': -1
    }).appendTo($('body')).animate({
      width: '3000px',
      height: '3000px',
    });
  }, function() {
    if ($('.color').length > 1) {
      $('.color').eq(0).remove();
    }
  });
});
