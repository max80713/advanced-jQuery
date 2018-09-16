(function($){
  function getDirection($target,e){
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
    
    return direction;
  }

  function enterHandler(e){
    $(this).trigger('mousedirection', ['in', getDirection($(this),e)]);
  }
  
  function leaveHandler(e){
    $(this).trigger('mousedirection', ['out', getDirection($(this),e)]);
  }

  $.event.special.mousedirection = {
    setup: function(f) {
      $(this).on('mouseenter', enterHandler).on('mouseleave', leaveHandler);
    },
    teardown: function() {
      $(this).off('mouseenter', enterHandler).off('mouseleave',leaveHandler);
    }
  }

  $.fn.extend({
    mousedirection: function(handler) {
      return handler ? $(this).on('mousedirection', handler) : this.trigger('mousedirection');
    },
    unmousedirection: function() {
      $(this).off('mousedirection')
    }
  })

})($)