Template.layout.onRendered(function() {
  $('header.header').headroom({
    // vertical offset in px before element is first unpinned
    offset : 0,
    // scroll tolerance in px before state changes
    tolerance : 0,
    // or scroll tolerance per direction
    tolerance : {
      down : 0,
      up : 0
    },
    // css classes to apply
    classes : {
      // when element is initialised
      initial : 'headroom',
      // when scrolling up
      pinned : 'pinned',
      // when scrolling down
      unpinned : 'unpinned',
      // when above offset
      top : 'above',
      // when below offset
      notTop : 'below'
    },
    // callback when pinned, `this` is headroom object
    onPin : function() {},
    // callback when unpinned, `this` is headroom object
    onUnpin : function() {},
    // callback when above offset, `this` is headroom object
    onTop : function() {},
    // callback when below offset, `this` is headroom object
    onNotTop : function() {}
  });
});
