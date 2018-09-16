$(function() {
  $.fn.extend({
    mousedirection: function(handler) {
      return handler ? $(this).on('mousedirection', handler) : $(this).trigger('mousedirection');
    },
    unmousedirection: function() {
      $(this).off('mousedirection')
    }
  })

  function makeStyle($target, e){
    var top = Math.abs(e.offsetY);
    var bottom = Math.abs($target.height() - top);
    var left = Math.abs(e.offsetX);
    var right = Math.abs($target.width() - left);

    var directions = [{
      type: 'top',
      distance: top
    }, {
      type: 'bottom',
      distance: bottom
    }, {
      type: 'left',
      distance: left
    }, {
      type: 'right',
      distance: right
    }];

    var direction = directions.find(function(e) {
      return e.distance === Math.min(top, bottom, left, right);
    }).type;
    
    switch(direction){
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
  
  $('.image').on('mouseenter',function(e){
    $('.mask').stop().css(makeStyle($(this), e)).animate({
      top: '0',
      left: '0'
    }, 200)
  }).on("mouseleave",function(e){
    $('.mask').stop().animate(makeStyle($(this),e), 200)
  })
});
