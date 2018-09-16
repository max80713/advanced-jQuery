function loadData(handle) {
  setTimeout(function() {
    var data = [
      {
        title: '富士山',
        imageUrl: '1.jpeg',
      },
      {
        title: '101',
        imageUrl: '2.jpeg',
      },
      {
        title: '自由女神',
        imageUrl: '3.jpeg',
      }
    ];
    handle(data);
  }, 1000);
}