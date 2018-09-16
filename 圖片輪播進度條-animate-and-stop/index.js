$(function() {
  var imageIndex = 1;
  var interval;

  function next() {
    imageIndex += 1;
    if (imageIndex > 5) {
      imageIndex = 1;
    }

    $('.image').css('background-image', 'url(' + imageIndex + '.jpg)');

    // 開始進度條動畫
    $('.progress').eq(imageIndex - 1).css('width', '0%').animate({
      width: '100%',
    }, 3000);
  }

  function play() {
    $('.progress').eq(imageIndex - 1).css('width', '0%').animate({
      width: '100%',
    }, 3000);

    interval = setInterval(next, 3000);
  }

  function pause() {
    // 停止當下進度條
    $('.progress').eq(imageIndex - 1).stop().css('width', '0%');

    clearInterval(interval);
  }

  $('.bar').click(function() {
    // 填滿先前進度條
    $('.progress').eq(imageIndex - 1).css('width', '100%');

    var index = $('.bar').index($(this));
    imageIndex = index + 1;
    
    // 清空現在的進度條
    $('.progress').eq(imageIndex - 1).css('width', '0%');
    $('.image').css('background-image', 'url(' + imageIndex + '.jpg)');
  });

  $('.player').hover(function() {
    pause();
  }, function() {
    play();
  });

  play();
});
