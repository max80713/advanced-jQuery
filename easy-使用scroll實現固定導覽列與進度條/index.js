function setProgress() {
  var total = $('body').height() - $(window).height() * 2;
  var progress = $(window).scrollTop() - $(window).height() ;

  $('.progress').css({
    width: progress / total * 100 + '%'
  })
}

function setHeader() {
  if ($(this).scrollTop() > $(this).height()) {
    $('.header').fadeIn('slow');
  } else {
    $('.header').fadeOut('slow');
  }
}

$(function() {
  $(window).scroll(function() {
    setProgress();
    setHeader();
  })
});
