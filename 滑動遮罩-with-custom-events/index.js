$(function() {
  function makeStyle(direction) {
    switch(direction) {
      case 'top':
        return {
          top: '-100%',
          left: '0%'
        }
      case 'bottom':
        return {
          top: '100%',
          left: '0%'
        }
      case 'left':
        return {
          top: '0%',
          left: '-100%'
        }
      case 'right':
        return {
          top: '0%',
          left: '100%'
        }
    }
  }
  
  $('.image').on('mousedirection', function(e, type, direction) {
    if (type === 'in') {
      $('.mask').stop().css(makeStyle(direction)).animate({
        top: '0',
        left: '0'
      }, 200);
    } else {
      $('.mask').stop().animate(makeStyle(direction), 200);
    }
  });
});
