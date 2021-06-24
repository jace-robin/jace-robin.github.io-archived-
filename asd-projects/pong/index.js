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
  // Game Item Objects
  var keysHeld = [];
  var posneg;
  var board = {
    id: "#board",
    x: 0,
    y: 0,
    height: boardHeight,
    width: boardWidth,
    type: "board",
  }
  var enemy = {
    id: "#enemy",
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0,
    points: 0,
    width: parseFloat($('#enemy').css('width')),
    height: parseFloat($('#enemy').css('height')),
    type: 'paddle',
  }
  var player = {
    id: "#player",
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0,
    points: 0,
    width: parseFloat($('#player').css('width')),
    height: parseFloat($('#player').css('height')),
    type: 'paddle',
  }
  var ball = {
    id: "#ball",
    x: 0,
    y: 0,
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
    handleBall();
    handlePlayer();
    handleEnemy();
    handleCollisions(ball, board);
    handleCollisions(ball, player);
    handleCollisions(ball, enemy);
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
    enemy.x = board.x + enemy.width; 
    enemy.y = 220;
    enemy.speedX = 0;
    enemy.speedY = 0;
    player.x = board.width - player.width;
    player.y = 220;
    player.speedX = 0;
    player.speedY = 0;
    ball.x = boardWidth / 2 - ball.width / 2;
    ball.y = boardHeight / 2 - ball.height / 2;
    bounceBall(posneg);
    changePosition(ball);
    changePosition(player);
    changePosition(enemy);
    updateScreen();
    $("#playerpoints").text('Player Points: ' + player.points);
    $("#enemypoints").text('Enemy Points: ' + enemy.points);
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
    /*let ballSpeedTotal = Math.abs(ball.speedX) + Math.abs(ball.speedY);
    if (ballSpeedTotal < 4 && ballSpeedTotal > -4) {
            console.log("stuck");
      ball.speedY = Math.round((Math.random() * 8) - 4) * -1;
      ball.speedX = Math.round((Math.random() * 8) - 4) * -1;
    }
    else {
      //console.log ("unstuck");
    }*/
    changePosition(ball);
  };
  function handleCollisions (obj1, obj2) {
    findSides(obj1);
    findSides(obj2);
    if (obj2.id === "#player") {
      if (obj1.sides.right > obj2.sides.left) {
        if (obj1.sides.bottom > obj2.sides.top && obj1.sides.top < obj2.sides.bottom) {
          console.log("collided with player");
          bounceBall();
          
      }
    }
  }
    if (obj2.id === "#enemy") {
    if (obj1.sides.left < obj2.sides.right) {
      if (obj1.sides.bottom > obj2.sides.top && obj1.sides.top < obj2.sides.bottom) {
        console.log("collided with enemy");
        bounceBall();
        
    }
  }
}
    if (obj2.id === "#board") {
    if (obj1.sides.bottom > obj2.sides.bottom || obj1.sides.top < obj2.sides.top) {
      console.log("collided with roof/floor");
      obj1.speedY = obj1.speedY * -1;
    }
    if (obj1.sides.left < obj2.sides.left) {
      player.points += 1;
      console.log("player scored");
      resetScene();
    }
    else if (obj1.sides.right > obj2.sides.right) {
      enemy.points += 1;
      console.log("enemy scored");
      resetScene();
    }
  }
};
  function bounceBall () {
    var i = findPosNeg();
    ball.speedY = Math.round((Math.random() * 3) + 2) * (-1 * i);
    ball.speedX = Math.round((Math.random() * 3) + 2) * (-1 * i);
    console.log("bouncy bouncy");
    if (ball.speedX > 4) {
      ball.speedX = 4;
    }
    else if (ball.speedX < -4) {
      ball.speedX = -4;
    };
    if (ball.speedY > 4) {
      ball.speedY = 4;
    }
    else if (ball.speedY < -4) {
      ball.speedY = -4;
    };
  }
  function changePosition(object) {
    object.y += object.speedY;
    object.x += object.speedX;
    if (object.type === "paddle") {
      
    };
  }
  function updateScreen() {
    //i know changing the x is not used by the paddles, but is good to have for the ball
    //disregard prev comment, removed the x and y parameters in moveObject
    moveObject(player);
    moveObject(enemy);
    moveObject(ball);
  }
  function resetScene () {
    spawn();

  }
  function findPosNeg () {
      if (ball.speedX > 0) {
        return 1;
      }
      else {
        return -1;
      }
    };
  function moveObject (object) {
    $(object.id).css("left", object.x);
    $(object.id).css("top", object.y);
  };
  function findSides (object) {
    object.sides = {
      right: object.x + object.width,
      left: object.x,
      top: object.y,
      bottom: object.y + object.height,
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