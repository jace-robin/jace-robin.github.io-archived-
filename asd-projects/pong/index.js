/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var boardWidth = parseFloat($("#board").css("width"));
  var boardHeight = parseFloat($("#board").css("height"));
  console.log(boardWidth);
  console.log(boardHeight);
  var gameInfo = {
    paddleSpeed: 10,
    ballSpeed: 15,
    screen: {
  }
}
  // Game Item Objects
  var keysHeld = [];
  var enemy = {
    id: "#enemy",
    x: undefined,
    y: undefined,
    speedX: 0,
    speedY: 0,
    width: parseFloat($('#enemy').css('width')),
    height: parseFloat($('#enemy').css('height')),
    type: 'paddle',
  }
  var player = {
    id: "#player",
    x: undefined,
    y: undefined,
    speedX: 0,
    speedY: 0,
    width: parseFloat($('#player').css('width')),
    height: parseFloat($('#player').css('height')),
    type: 'paddle',
  }
  var ball = {
    id: "#ball",
    x: undefined,
    y: undefined,
    speedX: 0,
    speedY: 0,
    width: parseFloat($('#ball').css('width')),
    height: parseFloat($('#ball').css('height')),
    type: 'ball',
  }
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle 
  $(document).on('keyup', handleKeyUp); 
  //spawn positioning
  spawn();
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    handlePlayer();
    handleBall();
    handleEnemy();
    handleCollisions(player, ball);
    handleCollisions(enemy, ball);
    updateScreen();
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    var key = keycodes[event.which - 1];
    if (!keysHeld.includes(key)) {
      keysHeld.push(key);
    }
  };
  function handleKeyUp(event) {
    var key = keycodes[event.which - 1];
    if (keysHeld.includes(key)) {
      keysHeld.splice(keysHeld.indexOf(key), 1);
        }
  };

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  //FINISH THIS TMMRW MORNING, JUST ADD THE 
  function spawn () {
    enemy.x = 25; 
    enemy.y = 220;
    player.x = 415;
    player.y = 220;
    ball.x = boardWidth / 2 + ball.width / 2;
    ball.y = boardHeight / 2 + ball.height / 2;
    ball.speedX = 1;
    ball.speedY = 1;
    changePosition(ball);
    changePosition(player);
    changePosition(enemy);
    }
  function handlePlayer() {
    if (keysHeld.includes("up")) {
      player.speedY = -10
    }
    else if (keysHeld.includes("down")) {
      player.speedY = 10
    }
    else {
      player.speedY = 0
    }
    changePosition(player);
  };
  function handleEnemy() {
    //enemy.x = ball.x;
    enemy.y = ball.y;
    changePosition(enemy);
  }
  function handleBall() {
    bounceBall ();
    changePosition(ball);
  };
  function handleCollisions (obj1, obj2) {
    findSides(obj1);
    findSides(obj2);
    if (obj1.sides.left < obj2.sides.right && obj1.sides.right < obj2.sides.left || obj1.sides.bottom > obj2.sides.top && obj1.sides.top < obj2.sides.bottom) {
      if (obj2.id === "#ball") {
        bounceBall();
      }
    }
    changePosition(ball)
  };
  function bounceBall () {
    ball.speedX = ball.speedX /* * Math.max(-3, Math.round(Math.random() * 2) */ * -1;
    ball.speedY = ball.speedY /* * Math.max(-3, Math.round(Math.random() * 2) */ * -1;
  }
  function changePosition(object) {
    object.y += object.speedY;
    object.x += object.speedX;
    if (object.type === "paddle") {
      
    };
  }
  function updateScreen() {
    //i know changing the x is not used by the paddles, but is good to have for the ball
    moveObject(player.id, player.x, player.y);
    moveObject(enemy.id, enemy.x, enemy.y);
    moveObject(ball.id, ball.x, ball.y);
  }
  function moveObject (object, x, y) {
    $(object).css("left", x);
    $(object).css("top", y);
  };
  function findSides (object) {
    object.sides = {
      right: object.x + object.width,
      left: object.x,
      top: object.y,
      bottom: object.x + object.height,
    }
  };
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}
//remember velkhana (6/16/21)