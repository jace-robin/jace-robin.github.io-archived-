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
  var keysHeld = [];
  var allowJump;
  var board = {
    id: "#board",
    position: {
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
  console.log(floor);
  var player = {
    id: "#player",
    position: {
      x: 0,
      y: 0,
    },
    speed: {
      x: 0,
      y: 0,
    },
    jumps: 4,
    width: parseFloat($('#player').css('width')),
    height: parseFloat($('#player').css('height')),
    type: "player",
  };
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
    //changeText();
    updateScreen();
    //console.log (player);
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
  
  
  //called at the start of the game
  function spawn () {
    player.position.x = board.position.x + player.width;
    player.position.y = board.height - player.height;
    player.speed.x = 0;
    player.speed.y = 0;
    updateScreen();
    }
  //handles player movement and key presses
  function changeText($id, objBase) {
    $("<p>").text("x: " + objBase.position.x);
    $("<p>").text("y: " + objBase.position.y);
    $("<p>").text("speed x: " + objBase.speed.x);
  }
  function handlePlayer() {
    if (keysHeld.includes("left")) {
      player.speed.x -= 5;
      capSpeed(player, 'x', 15);
    }
    else if (keysHeld.includes("right")) {
      player.speed.x += 5;
      capSpeed(player, 'x', 15);
    }
    else {
      handleDrag(player, "x", 2);
    }
    if (keysHeld.includes("up")) {
      attemptJump(player);
      {/*if (handleCollisionsSide(floor, player, "top")) {
        if (player.jumps > 0) {
          allowJump = true;
          player.speed.y = -10;
          player.jumps -= 1;
          console.log(player.jumps + " jumps left, " + handleCollisionsSide(floor, player, "bottom"));
        }
      }
        else if (handleCollisionsSide(floor, player, "top") !== true) {
          allowJump = false;
          if (player.speed.y < 0) {
            player.speed.y = 0;
            player.jumps = 3;
          }
        }
  
  if (!handleCollisionsSide(floor, player, "top")) {
    allowJump = false;
    if (player.speed.y < 0) {
      player.speed.y = 0;
      player.jumps = 3;
      handleDrag(player, "y", 3);
      gravity(player, 3);
      console.log ("gravity and drag called");
    }
  }*/}
}
    if (!player.position.x) {
      player.position.x = 0;
    }
    if (!player.position.y) {
      player.position.y = 0;
    }
    if (!handleCollisionsSide(floor, player, "top")) {
      allowJump = false;
      if (player.speed.y < 0) {
        player.speed.y = 0;
        player.jumps = 3;
        gravity(player, 3);
        console.log ("gravity and drag called");
      }
    }
    changePosition(player);
  };
  
  function attemptJump(obj) {
      if (player.jumps > 0) {
        allowJump = true;
        player.speed.y = -10;
        player.jumps -= 1;
        console.log(player.jumps + " jumps left, " + handleCollisionsSide(floor, player, "bottom"));
      }
    console.log(handleCollisionsSide(floor, player, "top"));
  }

  //handles the meat of this program, uses the sides of both objects to see whether or not it has collided
  function recursionCollisions () {
  //if touching the floor, set touchingFloor to true and dont call the function again, if not then false(was testing, not sure if ill use it though)
    if (touchingFloor) {
      if (player.speed.y > 0) {
        player.speed.y = 0;
      }
    }
    else {
      var touchingFloor = (handleCollisions(floor,player))? true : false;
    }
  }
  function gravity (obj, rate) {
    if (obj.speed.y < 5 || obj.position.y > obj.height > floor.y - floor.height) {
      handleDrag(player, 'y', )
      obj.speed.y += rate;
    }
  }
  function handleCollisionsSide(obj1, obj2, side) {
    //find out if obj2 is colliding with either the top or bottom of obj1
    findSides(obj1);
    findSides(obj2);
      if (side === "top") {
        if (obj1.sides.top <= obj2.sides.bottom) {
          if (obj1.sides.left < obj2.sides.left && obj1.sides.right > obj2.sides.right) {
            return true;
          }
        }
      }
    if (side === "bottom") {
      if (obj1.sides.bottom >= obj2.sides.top) {
        if (obj1.sides.left < obj2.sides.left && obj1.sides.right > obj2.sides.right) {
          return true;
        }
      }
    }
  }
  function handleCollisions (obj1, obj2) {
    findSides(obj1);
    findSides(obj2);
    /*if (obj1.sides.top <= obj2.sides.bottom || obj1.sides.bottom >= obj2.sides.top) {
      if (obj1.sides.left <= obj2.sides.left && obj1.sides.right >= obj2.sides.right)*/
      if (obj1.sides.top <= obj2.sides.top && obj1.sides.bottom >= obj2.sides.bottom) {
        if (obj1.sides.left <= obj2.sides.left && obj1.sides.right >= obj2.sides.right) {
        return true;
      }
      else {
        return false;
      }
    }
  }

  function findSides (object) {
    //find the sides of any given object by using its width, height, x, and y
    object.sides = {
      right: object.position.x + object.width,
      left: object.position.x,
      top: object.position.y,
      bottom: object.position.y + object.height,
    }
  }

  function getDistance (obj1, obj2) {
    return (obj1.name + " distance x: " + Math.abs(obj1.position.x - obj2.position.x) + ', ' + " distance y: " + Math.abs(obj1.position.y - obj2.position.y));
  }

  function changePosition(object) {
    object.position.y += object.speed.y;
    object.position.x += object.speed.x;
  }

  function updateScreen() {
    moveObject(player);
  }
  
  function handleDrag(object, xy, rate) {
    if (object.speed[xy] > 0) {
      object.speed[xy] -= rate;
    }
    else if (object.speed[xy] < 0) {
      if (object.type !== "player") {
      object.speed[xy] += rate;
      }
    }
  }

  function moveObject (object) {
    //use jquery to reposition the selected object on screen
    $(object.id).css("left", object.position.x);
    $(object.id).css("top", object.position.y);
  }

  function capSpeed (object, xy, max) {
      if (object.speed[xy] > max) {
        object.speed[xy] = max;
      }
      else if (object.speed[xy] < max * -1) {
        object.speed[xy] = max * -1;
      }
  }
  function createPlayer (name, $id, x, y, speedX, speedY, up, down, left, right) {
    var object = {
      name: name,
      id: $id,
      x: x,
      y: y,
      width: parseFloat($($id).css("width")),
      height: parseFloat($($id).css("height")),
      speedX: speedX,
      speedY: speedY,
      keys: {
      up: up,
      down: down,
      left: left,
      right: right,
      },
    };
    return object;
    }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  };
};
//velkhana