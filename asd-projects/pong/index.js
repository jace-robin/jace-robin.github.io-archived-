/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var boardWidth = $("board").css("width");
  var boardHeight = $("board").css("height");
  var gameInfo = {
    paddleSpeed: 10,
    ballSpeed: 15,
    spawns: {
      ball: boardWidth / 2,
      player: boardWidth - 25,
      enemy: boardWidth + 25,
  }
}
  // Game Item Objects
  var keysHeld = [];
  var player = {
    x: undefined,
    y: undefined,
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle 
  $(document).on('keyup', handleKeyUp);  
  spawnObject (player);
  spawnObject (enemy);
  spawnObject(ball);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    //update positions in memory
    //handle any extra collisions or
    //update positions on screen
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    var key = keyarray[event.which - 1];
    if (!keysHeld.includes(key)) {
      keysHeld.push(key);
      console.log(keysHeld);
    }
    else {

    }
  };
  function handleKeyUp(event) {
      var key = keyarray[event.which - 1];
      if (keysHeld.includes(key)) {
        keysHeld.splice(keysHeld.indexOf(key), 1);
        console.log(keysHeld);
        }
    };
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function teleport ($id, x, y) {
    var id = $id;
    $(id).css("left") = gameInfo.spawns.object[id];
    $(id).css("top") = boardHeight / 2;
  }
  function findSides (object) {
    object.boundary = {
      right,
      left,
      top,
      bottom,
    }
  }
  function movePlayer () {

  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}
//remember velkhana (6/16/21)