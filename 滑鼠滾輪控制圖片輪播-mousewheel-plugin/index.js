$(function() {
  var interval;
  var imageName = 1;
  var scrollDirection = 'DOWN';

  function makeStyle(top, imageName) {
    return {
      'background-image': 'url('+ imageName +'.jpg)',
      top: top,
    }
  }
  
  function slideDown() {
    imageName -= 1;
  
    // 如果小於最小的 image name，要重新設成最大的 image name
    if (imageName < 1) {
      imageName = 6;
    }
  
    var $inner = $('<div></div>').addClass('inner').css(makeStyle('-400px', imageName));
    
    $('.outer').append($inner).children().animate({
      top: '+=400px'
    }, 1000, function() {
      // 滑動結束之後要把原本的圖片拿掉
      if ($('.inner').length == 2) {
        $('.inner:eq(0)').remove();
      }
    });
  }

  function slideUp() {
    imageName += 1;
  
    // 如果大於於最大的 image name，要重新設成最小的 image name
    if (imageName > 6) {
      imageName = 1;
    }
  
    var $inner = $('<div></div>').addClass('inner').css(makeStyle('400px', imageName));
    
    $('.outer').append($inner).children().animate({
      top: '-=400px'
    }, 1000, function() {
      // 滑動結束之後要把原本的圖片拿掉
      if ($('.inner').length == 2) {
        $('.inner:eq(0)').remove();
      }
    });
  }
  
  interval = setInterval(function() {
    if (scrollDirection === 'DOWN') {
      slideDown();
    } else {
      slideDown();
    }
  }, 3000);;

  $('.outer').hover(function(e) {
    clearInterval(interval);
  }, function() {
    interval = setInterval(function() {
      if (scrollDirection === 'DOWN') {
        slideDown();
      } else {
        slideUp();
      }
    }, 3000);
  });

  $('.outer').mousewheel(function(e) {
    // 避免同時多個滑動
    if ($(this).children().length == 2) {
      return;
    }

    if (e.deltaY < 0) {
      scrollDirection = 'DOWN';
      slideDown();
    } else {
      scrollDirection = 'UP';
      slideUp();
    }
  });
});
