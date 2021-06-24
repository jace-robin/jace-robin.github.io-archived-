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
  
  
  //called at the start of the game and after a point is scored
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
    finishGame();
    }

//handles player movement and key presses
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
//handles enemy movement
  function handleEnemy() {
    if (enemy.y < ball.y) {
      enemy.speedY = 3;
    }
    else if (enemy.y > ball.y) {
      enemy.speedY = -3;
    }
    else {
      enemy.speedY = 0;
    }
    changePosition(enemy);
  }
//handles the balls movement
  function handleBall() {
    changePosition(ball);
  };
//called after every round to check if there is a winner
  function finishGame () {
    if (player.points === 11) {
      console.log('PLAYER WINS');
    }
    else if (enemy.points === 11) {
      console.log("ENEMY WINS")
    }
  }
//handles the meat of this program, uses the sides of both objects to see whether or not it has collided
  function handleCollisions (obj1, obj2) {
    findSides(obj1);
    findSides(obj2);
//if colliding with player
    if (obj2.id === "#player") {
      if (obj1.sides.right > obj2.sides.left) {
        if (obj1.sides.bottom > obj2.sides.top && obj1.sides.top < obj2.sides.bottom) {
          console.log("collided with player");
          bounceBall();
      }
    }
  }
//if colliding with enemy
    if (obj2.id === "#enemy") {
    if (obj1.sides.left < obj2.sides.right) {
      if (obj1.sides.bottom > obj2.sides.top && obj1.sides.top < obj2.sides.bottom) {
        console.log("collided with enemy");
        bounceBall();
    }
  }
};
//if colliding with board, check if either roof||floor, or side wall, and if so give a point to the appropriate side
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
//bounce the ball a random amount, uses posneg to find if the ball is travelling left or right to make sure it travels opposite on bounce
  function bounceBall () {
    var i = findPosNeg();
    ball.speedX = Math.round((Math.random() * 5) + 4) * (-1 * i);
    ball.speedY = 10 - ball.speedX * (-1 * i);
    console.log("bouncy bouncy");
    if (ball.speedX > 8) {
      ball.speedX = 8;
    }
    else if (ball.speedX < -8) {
      ball.speedX = -8;
    };
    if (ball.speedY > 8) {
      ball.speedY = 8;
    }
    else if (ball.speedY < -8) {
      ball.speedY = -8;
    };
  }
  function changePosition(object) {
    object.y += object.speedY;
    object.x += object.speedX;
    if (object.type === "paddle") {
      
    };
  }
  function updateScreen() {
    /*i know changing the x is not used by the paddles, but is good to have for the ball
    disregard prev comment, removed the x and y parameters in moveObject*/
    
    //used to bunch all objects together and move with one script at the end of the call stack 
    moveObject(player);
    moveObject(enemy);
    moveObject(ball);
  }
  function resetScene () {
    //called when a point is given, calls the spawn function to reposition and reset the ball, enemy, and player
    spawn();

  }
  function findPosNeg () {
    //finds if travelling left or right and returns 1 or -1 to tell which direction to bounce in
      if (ball.speedX > 0) {
        return 1;
      }
      else {
        return -1;
      }
    };
  function moveObject (object) {
    //use jquery to reposition the selected object on screen
    $(object.id).css("left", object.x);
    $(object.id).css("top", object.y);
  };
  function findSides (object) {
    //find the sides of any given object by using its width, height, x, and y
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
//velkhana