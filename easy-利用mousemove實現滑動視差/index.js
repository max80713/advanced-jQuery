$(function() {
  $('body').mousemove(function(e) {
    var x = -(e.pageX) / 20;
    var y = -(e.pageY) / 20;
    $('.background').css('background-position', x + 'px ' + y + 'px');
  })
})