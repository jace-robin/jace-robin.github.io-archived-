/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
var held = [];
var power = 1;
var drag = 1;
var gravity = 1;
function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  // Game Item Objects
  var game = {
    simulation: {
      state: String,
    },
    objects: {
      mouse: {
        position: {
          x: 0,
          y: 0,
        },
        held: false,
        click: {
          state: Boolean,
        },
      },
      board: {
        id: "#board",
          position: {
            x: 0,
            y: 0,
          },
        middle: {
          x: 0,
          y: 0,
        },
        width: parseFloat($('#board').css('width')),
        height: parseFloat($('#board').css('height')),
        type: "board",
      },
      floor: {
        id: "#floor",
        position: {
          x: 0,
          y: 0,
        },
        sides: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
        width: parseFloat($('#floor').css('width')),
        height: parseFloat($('#floor').css('height')),
        type: "floor",
      },
      player: {
        id: "#player",
        position: {
          x: 0,
          y: 0,
        },
        middle: {
          x: 0,
          y: 0,
        },
        sides: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
        speed: {
          x: 0,
          y: 0,
        },
        width: parseFloat($('#player').css('width')),
        height: parseFloat($('#player').css('height')),
        type: "player",
      },
      orb: {
        id: "#orb",
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
        width: parseFloat($('#orb').css('width')),
        height: parseFloat($('#orb').css('height')),
        type: "orb",
      },
      physicsEnabled: {
        orbs: [],
        players: [],
        misc: [],
      },
      },
    }
  }
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
    setPosition(player);
    updatePosition(player);
    updateText();
    //console.log (player);
  }

  /* 
  Called in response to events.
  */
  function handleMouseMove(event) {
    //find mouse position
    game.mouse.position.x = event.pageX;
    game.mouse.position.y = event.pageY;
  }
  function handleKeyDown(event) {
    var key = (keyObject[event.which]);
    keyStatus[key] = true;
    if (!held.includes(key)) {
        held.push(key);
    };
    if (key === "space") {
      if (game.simulation.state === "paused" || "stopped") {
        game.simulation.state === "running";
      }
      else {

      };
    $("#keys").text(held);
  };
function handleKeyUp(event) {
    var key = (keyObject[event.which]);
    keyStatus[key] = false;
    if (held.includes(key)) {
        held.splice(held.indexOf(key), 1);
    };
    $("#keys").text(held);
  };
  function handleMouseDown() {
    game.mouse.held = true;
    $("#mouseHeld").text("held");
    //throw player
    handleClick(game.mouse.click.state);
  };
  function handleMouseUp() {
    game.mouse.held = false;
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
    $("#mouseX").text("mouse x: " + game.mouse.position.x);
    $("#mouseY").text("mouse y: " + game.mouse.position.y);
    //player info
    $("#playerX").text("player x: " + game.player.position.x);
    $("#playerY").text("player y: " + game.player.position.y);
    $("#speedX").text("speed x: " + game.player.speed.x);
    $("#speedY").text("speed y: " + game.player.speed.y);
    //distance info
    $("#distanceX").text("distance middle: " + distanceT(game.objects.player, game.objects.floor, "x"));
    $("#distanceY").text("distance floor: " + distanceTo(game.objects.player, game.objects.floor, "y"));
  }

  //called at the start of the game
  function spawn() {
    findSides(game.objects.floor);
    findSides(game.objects.board);
    findSides(game.objects.roof);
    game.objects.player.position.x = game.objects.board.middle.x + game.objects.player.width;
    game.objects.player.position.y = game.objects.board.height - game.objects.player.height;
    //player.speed.x = 0;
    //player.speed.y = 0;
    game.objects.roof.position.y = game.objects.board.position.x - game.objects.roof.height;
    game.objects.floor.position.y = game.objects.board.height - game.objects.floor.height;
    updatePosition(game.objects.floor);
    updatePosition(game.objects.player);
    updatePosition(game.objects.roof);
  };
  //handles player movement and key presses
  function handlePlayer() {
    if (!handleCollisions(game.objects.board, game.objects.player)) {
      spawn();
    }
    if (handleCollisions(game.objects.player, game.objects.floor)) {
      if (game.objects.player.speed.y >= 0) {
        game.objects.player.speed.y = 0;
      }
      game.objects.player.position.y -= distanceTo(game.objects.player.sides.bottom, game.objects.floor.sides.top, "y");
      
    }
    if (handleCollisions(game.objects.player, game.objects.roof)) {
      if (game.objects.player.speed.y < 0) {
        game.objects.player.speed.y = 0;
      }
      game.objects.player.position.y += 1;
    }
    handleDrag(game.objects.player, drag);
    handleGravity(game.objects.player, gravity);
  };
  //handles the meat of this program, uses the sides of both objects to see whether or not it has collided
  function handleCollisions(obj1, obj2) {
    findSides(obj1);
    findSides(obj2);
    //if colliding with player

    if (obj1.sides.left <= obj2.sides.right &&
      obj1.sides.right >= obj2.sides.left &&
      obj1.sides.top <= obj2.sides.bottom &&
      obj1.sides.bottom >= obj2.sides.top) {
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
  function distanceTo(obj1, obj2, xy) {
    var distance = Math.abs(obj1.middle[xy] - obj2.middle[xy]);
    return distance;
  }
  function yeet(object, power) {
    findSides(object);
    setVelocityX(object, (((game.objects.mouse.position.x - object.middle.x) / 10) * power));
    setVelocityY(object, ((game.objects.mouse.position.y - object.middle.y) / 10) * power);
  };
  function setVelocityX(object, speed) {
    object.speed.x = speed;
  };
  function setVelocityY(object, speed) {
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

  function handleGravity(object, gravity) {
    if (!handleCollisions(floor, object)) {
      object.speed.y += gravity;
    };
    if (handleCollisions(floor, object)) {
      //add function in response to touching floor here
    };
  };
  function setPosition(object) {
    object.position.y += object.speed.y;
    object.position.x += object.speed.x;
  }
  function updatePosition(object) {
    //use jquery to reposition the selected object on screen
    $(object.id).css("left", object.position.x);
    $(object.id).css("top", object.position.y);
  };
  function findPosNeg(object) {
    //finds if an object is travelling left or right and returns 1 or -1
    return (object.position.x > game.objects.mouse.position.x ? 1 : -1);
  };
  function handleSideCollisions(obj1, obj2, side1, side2) {
    findSides(obj1);
    findSides(obj2);
    if (obj1.sides[side1] <= obj2.sides[side2]) {
      // collision detected!
      return true;
    }
  }
  function findSides(object) {
    //find the sides of any given object by using its width, height, x, and y
    object.sides = {
      right: object.position.x + object.width,
      left: object.position.x,
      top: object.position.y,
      bottom: object.position.y + object.height,
    };
    object.middle = {
      x: object.position.x + (object.width / 2),
      y: object.position.y + (object.height / 2),
    };
  };
  function handleDrag(object, drag) {
    if (object.speed.x > 0) {
      object.speed.x = Math.max(0, object.speed.x - drag);
    }
    if (object.speed.x < 0) {
      object.speed.x = Math.min(0, object.speed.x + drag);
    }
  };
  function wait(wait) {
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