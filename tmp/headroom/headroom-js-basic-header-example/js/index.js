var Header = document.querySelector('header');
var headroom = new Headroom(Header, {
  "offset": 205,
  "tolerance": 5
});
headroom.init();