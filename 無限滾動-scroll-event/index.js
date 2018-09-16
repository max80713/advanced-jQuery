function makeStyle(imageUrl) {
  return {
    width: '400px',
    height: '400px',
    'background-image': 'url('+ imageUrl + ')',
    'background-position': 'center center',
    'background-size': 'cover',
    'flex-shrink': 0,
    'margin-top': '20px',
  }
}

function makeLoadingStyle() {
  return {
    width: '100px',
    height: '100px',
    'background-image': 'url(loading.gif)',
    'background-position': 'center center',
    'background-size': 'cover',
    'flex-shrink': 0,
    'margin-top': '40px'
  }
}

function insertLoading() {
  $('.tag')
    .before($('<div></div>').css(makeLoadingStyle()).addClass('loading'));
}

function removeLoading() {
  $('.loading')
    .remove();
}

$(function() {
  var isLoading = false;

  function loadImages() {
    isLoading = true;
    insertLoading();
    loadData(function(data) {
      removeLoading();
      data.forEach(function(item) {
        var title = $('<div></div>').text(item.title).css('text-align', 'center');
        var image = $('<div></div>').css(makeStyle(item.imageUrl));
  
        var wrapper = $('<div></div>').css('margin-top', '100px').append(title).append(image);
        $('.tag').before(wrapper);
      })
      isLoading = false;
    });
  }

  $(window).on('scroll', function() {
    if (isLoading) {
      return;
    }

    if ($('.tag').position().top - $(this).scrollTop() === $(this).height()) {
      loadImages();
    }
  });

  loadImages();
});
