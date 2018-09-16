$(function() {
  $('input').keyup(function(e) {
    if (e.which === 13 ) {
      var keyword = $(this).val();

      if (keyword !== '') {
        
        $.ajax({
          url: "http://www.omdbapi.com/?t=" + keyword + "&apikey=1418971f",
        })
          .done(function(data) {
            if (data.Error) {
              window.alert('找不到資料');
            } else {
              $('.title').text(data.Title);
              $('.director').text("導演: " + data.Director);
              $('.rating').text("評價: " + data.imdbRating);
            }
          })
          .fail(function() {
            window.alert('錯誤');
          });
      }
    }
  });

  
});
