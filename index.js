$(function() {
  $('body').mousemove(function(e) {
    var screenCenterX = $(window).width() / 2;
    var screenCenterY = $(window).height() / 2;

    var newPageX = e.pageX - screenCenterX;
    var newPageY = e.pageY - screenCenterY;
    $('#img1').css('transform', 'translate(' + newPageX / 10 + 'px, ' + -newPageY / 10 +  'px)');
    $('#img2').css('transform', 'translate(' + -newPageX / 10 + 'px, ' + newPageY / 10 +  'px)');
  })
})