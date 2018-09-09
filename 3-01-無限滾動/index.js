function makeStyle(imageName) {
  return {
    width: '400px',
    height: '400px',
    'background-image': 'url('+ imageName +'.jpeg)',
    'background-position': 'center center',
    'background-size': 'cover',
    'flex-shrink': 0,
    'margin-top': '40px'
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

function appendImages() {
  $('body')
    .prepend($('<div></div>').css(makeStyle(3)))
    .prepend($('<div></div>').css(makeStyle(2)))
    .prepend($('<div></div>').css(makeStyle(1)));
}

function insertImages() {
  $('.tag')
    .before($('<div></div>').css(makeStyle(1)))
    .before($('<div></div>').css(makeStyle(2)))
    .before($('<div></div>').css(makeStyle(3)));
}

function insertLoading() {
  $('.tag')
    .before($('<div></div>').css(makeLoadingStyle()).addClass('loading'));
}

function removeLoading() {
  $('.loading')
    .remove();
}

function handleScroll() {
  if ($('.tag').position().top - $(this).scrollTop() === $(this).height()) {
    $(window).off();
    insertLoading();
    setTimeout(function() {
      removeLoading();
      insertImages();
      $(window).on('scroll', handleScroll);
    }, 1000);
  }

}

$(function() {
  appendImages();

  $(window).on('scroll', handleScroll);
});
