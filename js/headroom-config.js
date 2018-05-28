// grab an element
var Header = document.querySelector('header');
// construct an instance of Headroom, passing the element
var headroom = new Headroom(Header, {
  // vertical offset in px before element is first unpinned
  offset: 205,
  // scroll tolerance in px before state changes
  tolerance: 5,
  // or you can specify tolerance individually for up/down scroll
  /*tolerance : {
      up : 5,
      down : 0*/
  // css classes to apply
  /*classes: {
    // when element is initialised
    initial : "headroom",
    // when scrolling up
    pinned : "headroom--pinned",
    // when scrolling down
    unpinned : "headroom--unpinned",
    // when above offset
    top : "headroom--top",
    // when below offset
    notTop : "headroom--not-top",
    // when at bottom of scoll area
    bottom : "headroom--bottom",
    // when not at bottom of scroll area
    notBottom : "headroom--not-bottom"
    },*/
    // element to listen to scroll events on, defaults to `window`
    /*scroller : someElement,
    // callback when pinned, `this` is headroom object
    onPin : function() {},
    // callback when unpinned, `this` is headroom object
    onUnpin : function() {},
    // callback when above offset, `this` is headroom object
    onTop : function() {},
    // callback when below offset, `this` is headroom object
    onNotTop : function() {},
    // callback when at bottom of page, `this` is headroom object
    onBottom : function() {},
    // callback when moving away from bottom of page, `this` is headroom object
    onNotBottom : function() {}*/
});
// initialise
headroom.init();

/*
var bttHeadroom = new Headroom(document.getElementById("btt"), {
  offset : 500,
  tolerance : 0,
  classes: {
    initial: "slide",
    pinned: "slide--reset",
    unpinned: "slide--down"
  }
});
bttHeadroom.init();
*/

/*
var header = new Headroom(document.querySelector("#head"), {
  tolerance: 5,
  offset : 205,
  classes: {
  initial: "animated",
  pinned: "slideDown",
  unpinned: "slideUp"
  }
});
header.init();

var bttHeadroom = new Headroom(document.getElementById("btt"), {
  tolerance : 0,
  offset : 500,
  classes : {
      initial : "slide",
      pinned : "slide--reset",
      unpinned : "slide--down"
  }
});
bttHeadroom.init();
}());
*/