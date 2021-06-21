/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var rateOfDecrease = .5;
  var keysHeld = [];
  // Game Item Objects
  var player1 = {
    speed : {
      x: 0,
      y: 0,
    },
    pos : {
      x: 0,
      y: 0,
    },
    permissions : {
      allowMove: true,
    }
    };
    var coords = {
      delta : {
      x: 0,
      y: 0,
      },
      current : {
      x: 0,
      y: 0,
      }
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
  }
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    //if (keyarray[event.which - 1].fired === false) {
    var key = keycodes[event.which - 1];
    //console.log (key + " key pressed");
    if (!keysHeld.includes (key)) {
      keysHeld.push(key);
      console.log(keysHeld);
    }
    else {

    }
  };
  function handleKeyUp(event) {
  //console.log (keyarray[event.which - 1] + " key released");
    var key = keycodes[event.which - 1];
    if (keysHeld.includes (key)) {
      keysHeld.splice(keysHeld.indexOf(key), 1);
      } 
      console.log(keysHeld);
  };
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  /*function consoleLogPosition () {
    coords.delta.x = player1.pos.x;
    coords.delta.y = player1.pos.y;
//
    coords.current.x = player1.pos.x;
    coords.current.y = player1.pos.y;
//
    requireLog = function () {
      if (coords.delta.x !== coords.current.x || coords.delta.y !== coords.current.y) {
        return true;
      }
      else {
        return false;
      }
    }
    if (requireLog === true) {
      console.log("x: " + player1.pos.x + ", y: " + player1.pos.y);
    }
    else {
      "debug failed"
    }
  };*/
  function keymovement (player) {
    if (keysHeld.includes("left")|| keysHeld.includes("right")|| keysHeld.includes("up")|| keysHeld.includes("down")) {
/*      console.log("function movement called(keymovement)");
      if (Math.abs(player1.speed.x) < 10) {
          if (key === "left") {
            player1.speed.x = -2;
        }
          else if (key === "right") {
            player1.speed.x = 2;
        }
        else {
          player1.speed.x = 0;
        }
      }
      if (Math.abs(player1.speed.y) < 10) {
          if (key === "up") {
            player1.speed.y = 2;
        }
          else if (key === "down") {
            player1.speed.y = -2;
        }
      }
        else {
          player1.speed.y = 0;
        }
  }
    else {
      console.log("nah lmao");
  };*/
  //new input system for multiple input registration
  if (Math.abs(player1.speed.x) < 10) {
    if (keysHeld.includes("left") === true) {
      player1.speed.x -= maxSpeed;
        }
    else if (keysHeld.includes("right") === true) {
      player1.speed.x += maxSpeed;
        }
  if (Math.abs(player1.speed.y) < 10) {
    if (keysHeld.includes("up") === true) {
      player1.speed.y += maxSpeed;
      }
    else if (keysHeld.includes("down") === true) {
      player1.speed.y -= maxSpeed;
      }
    }
}
//  else {
//    console.log("nah lmao");
//}
    }
}
  function reduceSpeed (ROD) {
        if (player1.speed.x < 0) {
          player1.speed.x += ROD;
        }
        if (player1.speed.x > 0) {
          player1.speed.x -= ROD;
        }

        if (player1.speed.y < 0) {
          player1.speed.y += ROD;
        }
        if (player1.speed.y > 0) {
          player1.speed.y -= ROD;
        }
  };
  /*function collision (x, y) {
        if (player1.positionX <= board.width) {
          player1.xPos -= speedX
        }
  }*/
  function updateData() {
    updatePosition();
  }
  //update the player1 position in memory,not on screen just yet
  function updatePosition() {
    keymovement();
    player1.pos.x += player1.speed.x;
    player1.pos.y += player1.speed.y;
    reduceSpeed(rateOfDecrease);
    //collision();
    redrawPosition();
    //consoleLogPosition();
  }
  function redrawPosition () {
    /*var x = player1.pos.x;
    var y = player1.pos.y * -1;*/
    var x = player1.pos.x;
    var y = player1.pos.y * -1;
    $(gameItem).css('left', x);
    $(gameItem).css('top', y);
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);
    // turn off event handlers
    $(document).off();
  }
}
//remember velkhana (6/16/21)