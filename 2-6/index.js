function makeStyle(top, left, imageName) {
  return {
    width: '600px',
    height: '200px',
    'background-image': 'url('+ imageName +'.jpeg)',
    'background-position': '0 -'+ top,
    'background-size': 'auto 600px',
    position: 'absolute',
    top: top,
    left: left,
  }
}

function setup() {
  $('<div></div>').css(makeStyle('0', '0', 1)).appendTo($('.outer'));
  $('<div></div>').css(makeStyle('200px', '0', 1)).appendTo($('.outer'));
  $('<div></div>').css(makeStyle('400px', '0', 1)).appendTo($('.outer'));
}


$(function() {
  setup();
  var imageName = 1;

  $('.right').click(function() {
    if ($('.outer > div').length == 6) {
      return;
    }
    
    imageName += 1;

    if (imageName == 6) {
      imageName = 1;
    }

    $('<div></div>').css(makeStyle('0', '-600px', imageName)).appendTo($('.outer'));
    $('<div></div>').css(makeStyle('200px', '-600px', imageName)).appendTo($('.outer'));
    $('<div></div>').css(makeStyle('400px', '-600px', imageName)).appendTo($('.outer'));
  
    $('.outer > div:nth-child(3n+1)').animate({
      left: '+=600px'
    }, 1000);
  
    $('.outer > div:nth-child(3n+2)').delay(100).animate({
      left: '+=600px'
    }, 1000);
  
    $('.outer > div:nth-child(3n)').delay(400).animate({
      left: '+=600px'
    }, 1000, function() {
      if ($('.outer > div').length == 6) {
        $('.outer > div:lt(3)').remove();
      }
    });
  });

  $('.left').click(function() {
    if ($('.outer > div').length == 6) {
      return;
    }

    imageName -= 1;

    if (imageName == 0) {
      imageName = 5;
    }

    $('<div></div>').css(makeStyle('0', '600px', imageName)).appendTo($('.outer'));
    $('<div></div>').css(makeStyle('200px', '600px', imageName)).appendTo($('.outer'));
    $('<div></div>').css(makeStyle('400px', '600px', imageName)).appendTo($('.outer'));
  
    $('.outer > div:nth-child(3n+1)').animate({
      left: '-=600px'
    }, 1000);
  
    $('.outer > div:nth-child(3n+2)').delay(100).animate({
      left: '-=600px'
    }, 1000);
  
    $('.outer > div:nth-child(3n)').delay(400).animate({
      left: '-=600px'
    }, 1000, function() {
      if ($('.outer > div').length == 6) {
        $('.outer > div:lt(3)').remove();
      }
    });
  });
});
