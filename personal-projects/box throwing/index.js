/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  // Game Item Objects
  var mouse = {
    position: {
      x: 0,
      y: 0,
    },
    held: NaN,
  }
  var board = {
    id: "#board",
    position: {
      x: $("#board").css("x"),
      y: $("#board").css("y"),        
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
  console.log(floor);
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
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);
  $(document).on('mousedown', handleMouseDown);
  $(document).on('mouseup', handleMouseUp); 
  $(document).on('mousemove', handleMouseMove); 
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
    updateText();
    updateScreen();
    //console.log (player);
  }

  /* 
  Called in response to events.
  */
  function handleMouseMove(event) {
    //find mouse position
    mouse.position.x = event.pageX;
    mouse.position.y = event.pageY;
    $("#mouseX").text("'" + mouse.position.x + "'");
    $("#mouseY").text("'" + mouse.position.y + "'");
  }
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
  function handleMouseDown(event) {
    mouse.held = true;
    $("#mouseHeld").text("held");
    //throw player
    yeet(player);
  };
  function handleMouseUp() {
    mouse.held = false;
    $("#mouseHeld").text("not held");
  };
  /*function updateKeys() {
    for (i = 0; i++; i <= keysHeld.length) {
      //if keys pressed are also a valid key for movement, update
    }

  }*/

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
//update text for debugging
function updateText() {
  //mouse info
  $("#mouseX").text("mouse x: " + mouse.position.x);
  $("#mouseY").text("mouse y: " + mouse.position.y);
  //player info
  $("#playerX").text("player x: " + player.position.x);
  $("#playerY").text("player y: " + player.position.y);
  $("#speedX").text("speed x: " + player.speed.x);
  $("#speedY").text("speed y: " + player.speed.y);
}
  
  //called at the start of the game
  function spawn () {
    player.position.x = board.position.x + player.width;
    player.position.y = board.height - player.height;
    player.speed.x = 0;
    player.speed.y = 0;
    }
//handles player movement and key presses
  function handlePlayer() {
    handleGravity();
    /*if (handleCollisions(player, floor) === true) {
      if (player.speed.y > 0) {
        player.speed.y += player.speed.y * -1;
      }
    };
    if (handleCollisions(player, floor) === false) {
      allowJump = false;
      player.speed.y += 3;
    }
    else if (handleCollisions(player, floor) && (player.speed.y > 0)) {
      player.speed.y = 0;
      wait(.1);
      player.position.y -= 5;
    }
    if (!player.position.x) {
      player.position.x = 0;
    }
    if (!player.position.y) {
      player.position.y = 0;
    }*/
  };
//handles the meat of this program, uses the sides of both objects to see whether or not it has collided
  function handleCollisions (obj1, obj2) {
    findSides(obj1);
    findSides(obj2);
//if colliding with player

  if (obj1.position.x < obj2.position.x + obj2.width &&
    obj1.position.x + obj1.width > obj2.position.x &&
    obj1.position.y < obj2.position.y + obj2.height &&
    obj1.position.y + obj1.height > obj2.position.y) {
     // collision detected!
     return true;
  }

/*if (obj2.type === "player") {
      if (obj1.sides.top < obj2.sides.bottom) {
        console.log("collided with " + obj1.type);
        return true;
      }
    }
//if colliding with board, check if either roof||floor (another leftover, maybe useful?) (2. i think i removed it sometime after, n)
    
    if (obj1.type === "floor") {
    if (obj1.sides.top < obj2.sides.bottom) {
      //console.log("player collided with floor");
      //obj2.position.y = board.y - player.height - floor.height;
    }
  }*/
  };
  function yeet(object) {
    setVelocityX(object, ((Math.abs(mouse.position.x - object.middle.x) * findPosNeg(object))/1000));
    setVelocityY(object, Math.abs(mouse.position.y - object.middle.y)/1000);
  };
  function setVelocity (object, speed) {
    object.speed.x = speed;
  };
  function setVelocityY (object, speed) {
    object.speed.y = speed;
  };
  /*function create(id, type, x, y, speedx, speedy, width, height) {
    var object = {
      id: id,
      type: type,
      x: x,
      y: x,
      speed: {
        x: speedx,
        y: speedy,
      },
      width: width,
      height: height,
    }
    return object;
  }*/

  function handleGravity() {

  };
  function setPosition(object) {
    object.position.y += object.speed.y;
    object.position.x += object.speed.x;
  }
  function updateScreen() {
    setPosition(player);
    updatePosition(player);
  }
  function updatePosition (object) {
    //use jquery to reposition the selected object on screen
    $(object.id).css("left", object.position.x);
    $(object.id).css("top", object.position.y);
  };
  function findPosNeg (object) {
    //finds if an object is travelling left or right and returns 1 or -1
    return (object.position.x < mouse.position.x? 1: -1);
  };
  function findSides (object) {
    //find the sides of any given object by using its width, height, x, and y
    object.sides = {
      right: object.position.x + object.width,
      left: object.position.x,
      top: object.position.y,
      bottom: object.position.y + object.height,
    };
    object.middle = {
      x: object.position.x + (object.width/2),
      y: object.position.y + (object.height/2),
    };
  };
  function handleDrag(object) {
    if (object.speed.x > 0) {
      object.speed.x -= 2;
    }
    if (object.speed.x < 0) {
      object.speed.x += 2;
    }
  };
  function wait (wait) {
    setTimeout(wait * 1000);
  };
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  };
};
//velkhana