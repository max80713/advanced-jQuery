function makeStyle(top, left, imageName) {
  return {
    width: '600px',
    height: '600px',
    'background-image': 'url('+ imageName +'.jpeg)',
    'background-position': '0 0',
    'background-size': 'auto 600px',
    position: 'absolute',
    top: top,
    left: left,
  }
}

function setup() {
  $('<div></div>').css(makeStyle('0', '0', 1)).appendTo($('.outer'));
}

$(function() {
  setup();
  var imageName = 1;
  var scrollDirection = 'DOWN';
  var interval = setInterval(function() {
    if (scrollDirection === 'DOWN') {
      imageName -= 1;

      if (imageName == 0) {
        imageName = 5;
      }
      
      $('<div></div>').css(makeStyle('-600px', '0', imageName)).appendTo($('.outer'));

      $('.outer > div').animate({
        top: '+=600px'
      }, 1000, function() {
        if ($('.outer > div').length == 2) {
          $('.outer > div:nth-child(1)').remove();
        }
      });
    } else {
      imageName += 1;

      if (imageName == 6) {
        imageName = 1;
      }
      
      $('<div></div>').css(makeStyle('600px', '0', imageName)).appendTo($('.outer'));

      $('.outer > div').animate({
        top: '-=600px'
      }, 1000, function() {
        if ($('.outer > div').length == 2) {
          $('.outer > div:nth-child(1)').remove();
        }
      });
    }
  }, 3000);;

  $('.outer').hover(function(e) {
    clearInterval(interval);
  }, function() {
    interval = setInterval(function() {
      if (scrollDirection === 'DOWN') {
        imageName -= 1;
  
        if (imageName == 0) {
          imageName = 5;
        }
        
        $('<div></div>').css(makeStyle('-600px', '0', imageName)).appendTo($('.outer'));
  
        $('.outer > div').animate({
          top: '+=600px'
        }, 1000, function() {
          if ($('.outer > div').length == 2) {
            $('.outer > div:nth-child(1)').remove();
          }
        });
      } else {
        imageName += 1;
  
        if (imageName == 6) {
          imageName = 1;
        }
        
        $('<div></div>').css(makeStyle('600px', '0', imageName)).appendTo($('.outer'));
  
        $('.outer > div').animate({
          top: '-=600px'
        }, 1000, function() {
          if ($('.outer > div').length == 2) {
            $('.outer > div:nth-child(1)').remove();
          }
        });
      }
    }, 3000);
  });

  $('.outer').mousewheel(function(e) {
    if ($('.outer > div').length == 2) {
      return;
    }

    if (e.deltaY < 0) {
      imageName -= 1;
      scrollDirection = 'DOWN';

      if (imageName == 0) {
        imageName = 5;
      }
      
      $('<div></div>').css(makeStyle('-600px', '0', imageName)).appendTo($('.outer'));

      $('.outer > div').animate({
        top: '+=600px'
      }, 1000, function() {
        if ($('.outer > div').length == 2) {
          $('.outer > div:nth-child(1)').remove();
        }
      });
    } else {
      imageName += 1;
      scrollDirection = 'UP';

      if (imageName == 6) {
        imageName = 1;
      }
      
      $('<div></div>').css(makeStyle('600px', '0', imageName)).appendTo($('.outer'));

      $('.outer > div').animate({
        top: '-=600px'
      }, 1000, function() {
        if ($('.outer > div').length == 2) {
          $('.outer > div:nth-child(1)').remove();
        }
      });
    }
  });
});
