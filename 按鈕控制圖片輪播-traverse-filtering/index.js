$(function() {
  var imageIndex = 1;
  var interval;

  function next() {
    imageIndex += 1;
    if (imageIndex === 4) {
      imageIndex = 1;
    }

    $('.image').css('background-image', 'url(' + imageIndex + '.jpeg)');
  }

  function prev() {
    imageIndex -= 1;
    if (imageIndex === 0) {
      imageIndex = 3;
    }

    $('.image').css('background-image', 'url(' + imageIndex + '.jpeg)');
  }

  function play() {
    if ($('.buttons > button').eq(1).text() === '暫停') {
      interval = setInterval(next, 1000);
    }
  }

  function pause() {
    clearInterval(interval);
  }

  $('.buttons > button').eq(1).click(function() {
    if ($(this).text() === '暫停') {
      $(this).text('開始');
    } else if ($(this).text() === '開始') {
      $(this).text('暫停');
    }
  });

  $('.buttons > button').eq(0).click(function() {
    prev();
  });

  $('.buttons > button').eq(2).click(function() {
    next();
  });

  $('.player').hover(function() {
    pause();
  }, function() {
    play();
  });

  play();
});
