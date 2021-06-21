/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var boardWidth = $("#board").css("width");
  var boardHeight = $("#board").css("height");
  var gameInfo = {
    paddleSpeed: 10,
    ballSpeed: 15,
    screen: {
  }
}
  // Game Item Objects
  var keysHeld = [];
  var player = {
    id: "#player",
    x: 10,
    y: 220,
    speedX: 0,
    speedY: 0,
  }
  var enemy = {
    id: "#enemy",
    x: 430,
    y: 220,
    speedX: 0,
    speedY: 0,
  }
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle 
  $(document).on('keyup', handleKeyUp); 
  //spawn positioning
  player.x = 10; 
  player.y = 220;
  enemy.x = 380;
  enemy.y = 220;
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    handlePlayer();
    handleEnemy();
    handleBall();
    updateScreen();
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    var key = keycodes[event.which - 1];
    if (!keysHeld.includes(key)) {
      keysHeld.push(key);
      console.log(keysHeld);
    }
  };
  function handleKeyUp(event) {
    var key = keycodes[event.which - 1];
    if (keysHeld.includes(key)) {
      keysHeld.splice(keysHeld.indexOf(key), 1);
      console.log(keysHeld);
        }
    };
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  //FINISH THIS TMMRW MORNING, JUST ADD THE 
  function handlePlayer() {
    if (keysHeld.includes("up")) {
      player.speedX = -5
    }
  };

  function updateScreen() {
    moveObject(player.id, player.x, player.y);
    moveObject(enemy.id, enemy.x, enemy.y);
  }
  function moveObject (object, x, y) {
    $(object).css("left", x);
    $(object).css("top", y);
  };
  /*function findSides (object) {
    object.boundary = {
      right,
      left,
      top,
      bottom,
    }
  };*/
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}
//remember velkhana (6/16/21)