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
    jumps: 1,
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
    
    /*if (key === "q") {
      var x = window.prompt("x");
      var y = window.prompt("y");
      var width = window.prompt("width");
      var height = window.prompt("height");
      create(x, y, width, height);
    }*/

  };
  function handleKeyUp(event) {
    var key = keycodes[event.which - 1];
    if (keysHeld.includes(key)) {
      keysHeld.splice(keysHeld.indexOf(key), 1);
        }
  };
  /*function updateKeys() {
    for (i = 0; i++; i <= keysHeld.length) {
      //if keys pressed are also a valid key for movement, update
    }

  }*/

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  
  //called at the start of the game
  function spawn () {
    player.position.x = board.x + player.width;
    player.position.y = board.height - player.height;
    player.speed.x = 0;
    player.speed.y = 0;
    }
//handles player movement and key presses
    function handlePlayer() {
    capSpeed(player, 'y');
      if (keysHeld.includes("left")) {
      player.speed.x -= 5;
      capSpeed(player, 'x');
    }
    else if (keysHeld.includes("right")) {
      player.speed.x += 5;
      capSpeed(player, 'x');
    }
    else {
      handleDrag(player, 'x');
    }
    if (keysHeld.includes("up")) {
      if (allowJump && player.jumps > 0) {
        console.log(player.jumps);
        player.speed.y = -10;
        player.jumps -= 1;
        console.log(player.jumps);
    }        
  }
    if (handleCollisions(floor, player) === true) {
      if (allowJump) {
        if (player.jumps <= 2) {
          player.jumps = 2;
        }
        if (player.speed.y > 0) {
          player.speed.y += player.speed.y * -1;
        }
        allowJump = false;
      }
    }
    if (handleCollisions(floor, player) === false) {
      allowJump = false;
      player.speed.y += 3;
    }
    console.log ("allowJump " + allowJump);
    if (player.speed.x || player.speed.y) {
      console.log("speed x: " + player.speed.x + ", speed y: " + player.speed.y);
      //console.log("position x: " + player.position.x + ", position y: " + player.position.y);
    }
    if (!player.position.x) {
      player.position.x = 0;
    }
    if (!player.position.y) {
      player.position.y = 0;
    }
    changePosition(player);
  };
//handles the meat of this program, uses the sides of both objects to see whether or not it has collided
  function handleCollisions (obj1, obj2) {
    findSides(obj1);
    findSides(obj2);
//if colliding with player
    if (obj2.type === "player") {
        if (obj1.sides.top < obj2.sides.bottom) {
          console.log("collided with " + obj1.type);
          allowJump = true;
          return true;
      }
      else {
        allowJump = false;
        return false;
      }
  }
//if colliding with board, check if either roof||floor (another leftover, maybe useful?)
    
    if (obj1.type === "floor") {
    if (obj1.sides.top < obj2.sides.bottom) {
      //console.log("player collided with floor");
      //obj2.position.y = board.y - player.height - floor.height;
    }
  }
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


  function changePosition(object) {
    object.position.y += object.speed.y;
    object.position.x += object.speed.x;
}
  function updateScreen() {
    moveObject(player);
  }
  function findPosNeg (object) {
    //finds if an object is travelling left or right and returns 1 or -1
    return (object.speed.x > 0? 1: -1);
    };

  function moveObject (object) {
    //use jquery to reposition the selected object on screen
    $(object.id).css("left", object.position.x);
    $(object.id).css("top", object.position.y);
  };
  function findSides (object) {
    //find the sides of any given object by using its width, height, x, and y
    object.sides = {
      right: object.position.x + object.width,
      left: object.position.x,
      top: object.position.y,
      bottom: object.position.y + object.height,
    }
  };
  function capSpeed (object, xy) {
    if (xy == "x") {
      if (object.speed.x > 16) {
        object.speed.x = 16
      }
      else if (object.speed.x < -16) {
        object.speed.x = -16
      };
    }
    if (xy == "y") {
      if (object.speed.y > 16) {
        object.speed.y = 16
      }
      else if (object.speed.y < -16) {
        object.speed.y = -16;
      }
      handleDrag(object, 'y');
    }
  };
  function handleDrag(object, xy) {
    if (xy === "x") {
      if (object.speed.x > 0) {
        object.speed.x -= 2;
      }
      if (object.speed.x < 0) {
        object.speed.x += 2;
      }
    }
    if (xy === "y") {
      if (object.speed.y > 0) {
        object.speed.y -= 2;
      }
      if (object.speed.y < 0) {
      object.speed.y += 2;
      }
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