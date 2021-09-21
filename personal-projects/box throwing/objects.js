var mouse = {
    position: {
      x: 0,
      y: 0,
    },
    held: false,
}
var board = {
  id: "#board",
  position: {
    x: parseFloat($("#board").css("left")),
    y: parseFloat($("#board").css("top")),        
    },
    middle: {
      x: 0,
      y: 0,
    },
  width: parseFloat($('#board').css('width')),
  height: parseFloat($('#board').css('height')),
  type: "board",
};
var floor = {
    id: "#floor",
    position: {
    x: 0,
    y: 0,        
    },
    width: parseFloat($('#floor').css('width')),
    height: parseFloat($('#floor').css('height')),
    type: "floor",
};
var player = {
  id: "#player",
  position: {
    x: 0,
    y: 0,
  },
  middle: {
    x: 0,
    y: 0,
  },
  speed: {
    x: 0,
    y: 0,
  },
  width: parseFloat($('#player').css('width')),
  height: parseFloat($('#player').css('height')),
  type: "player",
};