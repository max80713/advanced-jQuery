$(function() {
  $('.main').contextmenu(function(e) {
    e.preventDefault();
    alert('禁止複製');
  });
});
