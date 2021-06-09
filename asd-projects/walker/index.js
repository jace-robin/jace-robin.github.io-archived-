/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var rateOfDecrease = 2;
var keyarray =
[
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~",
"backspace", 
"tab",
"~", 
"~", 
"~", 
"enter", 
"~", 
"~", 
"shift", 
"ctrl", 
"alt", 
"pause/break", 
"caps lock", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"escape", 
"~", 
"~", 
"~", 
"~", 
"space",
"~", 
"page down", 
"end", 
"home",
"left", 
"up", 
"right", 
"down", 
"~", 
"~", 
"~", 
"print screen", 
"insert", 
"delete", 
"~", 
"0", 
"1", 
"2", 
"3", 
"4", 
"5", 
"6", 
"7", 
"8", 
"9", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"a", 
"b", 
"c", 
"d", 
"e", 
"f", 
"g", 
"h", 
"i",
"j",
"k", 
"l", 
"m", 
"n", 
"o", 
"p", 
"q", 
"r", 
"s", 
"t", 
"u", 
"v", 
"w",
"x", 
"y", 
"z", 
"left window key", 
"right window key", 
"select key", 
"~", 
"~", 
"numpad 0", 
"numpad 1", 
"numpad 2", 
"numpad 3", 
"numpad 4", 
"numpad 5", 
"numpad 6", 
"numpad 7", 
"numpad 8", 
"numpad 9", 
"multiply", 
"add", 
"~", 
"subtract", 
"decimal point", 
"divide", 
"f1", 
"f2", 
"f3", 
"f4", 
"f5", 
"f6", 
"f7", 
"f8", 
"f9", 
"f10", 
"f11", 
"f12", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"num lock",
"scroll lock", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"My Computer(multimedia keyboard)", 
"My Calculator(multimedia keyboard)", 
"~", 
"~", 
"semi-colon", 
"equal sign", 
"comma", 
"dash",
"period", 
"forward slash", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"open bracket", 
"back slash", 
"close bracket", 
"single qoute", 
];
  // Game Item Objects
  var player1 = {
    speed : {
      x: 0,
      y: 0,
    },
    pos : {
      x: 0,
      y: 0
    },
    permissions : {
      allowMove: true
    },
    };

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp)
  /*for (var i = 0; i <= keyarray.length - 1; i++) {
    keyarray[i].fired = false;
  }*/
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
   //reduceSpeed(rateOfDecrease);
   //collision()
   updateData();
  /* 
  Called in response to events.
  */
  }
  function updateData() {
    
  }
  function handleKeyDown(event) {
    //if (keyarray[event.which - 1].fired === false) {
    var key = keyarray[event.which - 1];
    console.log (key + " key pressed");
    keymovement(key);
      //keyarray[event.which - 1].fired = true;
    //}

  };
  function handleKeyUp(event) {
    console.log (keyarray[event.which - 1] + " key released");
  };
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function consoleLogPosition () {
    console.log("x: " + player1.pos.x + "y: " + player1.pos.y);
  };
  function keymovement (key) {
    if (key === "left" || key === "right" || key === "up" || key === "down") {
      console.log("function movement called");
      //if (Math.abs(player1.speed.x) < 10) {
          if (key === "left") {
            player1.speed.x = 2;
        }
          else if (key === "right") {
            player1.speed.x = 2;
        }
      //}
      //  if (Math.abs(player1.speed.y) < 10) {
          else if (key === "up") {
            player1.speed.y = 2;
        }
          else if (key === "down") {
            player1.speed.y = 2;
        }
    //}
  }
    else {
      console.log("nah lmfao");
    }
    updatePosition();
    consoleLogPosition();
    console.clear;
};
  /*function reduceSpeed (ROD) {
        if (player1.speed.x < 0) {
          player1.speed.x += ROD;
        }
        else if (player1.speed.x > 0) {
          player1.speed.x -= ROD;
        };

        if (player1.speed.y < 0) {
          player1.speed.y += ROD;
        }
        else if (player1.speed.y > 0) {
          player1.speed.y -= ROD;
        };
  };*/
  function collision (x, y) {
        if (player1.positionX <= window.width) {
          player1.xPos -= speedX
        }
  }
  function redrawPosition () {
    $('gameItem').css('left', player1.pos.x);
    $('gameItem').css('top', player1.pos.y);
  }
  //update the players position in memory,not on screen just yet
  function updatePosition() {
    player1.pos.x += player1.speed.x;
    player1.pos.x += player1.speed.y;
    collision();
    redrawPosition();
    consoleLogPosition();
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);
    // turn off event handlers
    $(document).off();
  }
  
}