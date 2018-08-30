$(function() {
  $('.main').mousedown(function(e) {
    switch (e.which) {
      case 1:
        alert('左鍵');
        break;
      case 2:
        alert('中鍵');
        break;
      case 3:
        alert('右鍵');
        break;
      default:
        alert('其他');
    }   
  });
});
