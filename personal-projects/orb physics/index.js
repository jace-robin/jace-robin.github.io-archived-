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
  simulation= {
    state: "paused",
  };
  var click = {
    state: "placeOrb",
  };
  var mouse = {
    position: {
      x: 0,
      y: 0,
    },
    held: false,
  };
  var board = {
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
  };
  var floor = {
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
  };
  var roof = {
    id: "#roof",
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
    width: parseFloat($('#roof').css('width')),
    height: parseFloat($('#roof').css('height')),
    type: "roof",
  };
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
  };
  var orb = {
    class: ".orb",
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
    width: parseFloat($('.orb').css('width')),
    height: parseFloat($('.orb').css('height')),
    type: "orb",
  }
  var objects = {
      orbs: [],
      players: [],
      misc: [],
      all: [],
  };
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);
  $(document).on('click', handleClick);
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
    updateText();
    if (simulation.state === "running") {
      handleOrbs();
    };
    //setPosition(player);
    //updatePosition(player);
    //console.log (player);
  }

  /* 
  Called in response to events.
  */
  function handleMouseMove(event) {
    //find mouse position
    mouse.position.x = event.clientX;
    mouse.position.y = event.clientY;
  }
  function handleKeyDown(event) {
    var key = (keyObject[event.which]);
    keyStatus[key] = true;
    if (!held.includes(key)) {
        held.push(key);
    };
    if (key === "space") {
      if (simulation.state === "paused" || "stopped") {
        simulation.state === "running";
      }
      else {
        simulation.state === "paused";
      };
    };
    if (key === "1") {
      click.state = "placeOrb";
    };
    if (key === "r") {
      objects.orbs = [];
    };
    click.state = "placeOrb";
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
    mouse.held = true;
    $("#mouseHeld").text("held");
    //throw player
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
    //distance info
    //$("#distanceX").text("distance middle: " + distanceTo(player, floor, "x"));
    //$("#distanceY").text("distance floor: " + distanceTo(player, floor, "y"));
  }

  //called at the start of the game
  function spawn() {
    //factory("#orb1", ".orb", 70, 70, "orb");
    findSides(floor);
    findSides(board);
    findSides(roof);
    player.position.x = board.middle.x + player.width;
    player.position.y = board.height - player.height;
    //player.speed.x = 0;
    //player.speed.y = 0;
    roof.position.y = board.position.x - roof.height;
    floor.position.y = board.height - floor.height;
    updatePosition(floor);
    updatePosition(roof);
  };
  function handleClick() {
    if (click.state == "placeOrb") {
      //find new name
      var name = newName("orbs");
      //set the object.physicsEnabled.orbs index to the created object
      objects.orbs[name] = factory(name, '#' + name, ".orb", mouse.position.x, mouse.position.y, "orb");
      updatePosition(objects.orbs[name]);
      alert (objects.orbs[name].x + objects.orbs[name].y);
      //append the newly created object to the body, when using board the x and y is messed with. find a solution eventually
      $("#board").append('<div class="orb" id="' + name + '"></div>');
      //update position so the orb shows;
      updatePosition(objects.orbs[name]);
    }
  };
//new ID
  function newName (type) {
    //find new name by finding how many objects of this type are currently on screen and return
    var num = objects[type].length;
    console.log(num);
    var name = num;
    return name;
  }

  //factory
  function factory (name, id, cl, x, y, type) {
    var i = {
      name: name,
      id: id,
      class: cl,
      type: type,
      position: {
        x: x,
        y: y,
      },
      speed: {
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
    }
    return (i);
  };
  //loop over objects in use
  function handleOrbs () {
    for (var i = 0; i >= objects.orbs.length; i++) {
      findSides(objects.orbs[i].name);
      handlePlayer(objects.orbs[i].name);
      setPosition(objects.orbs[i].name);
      updatePosition(objects.orbs[i].name);
    };
  }
  //handles player movement and key presses
  function handlePlayer(object) {
    /*if (!handleCollisions(board, object)) {
      spawn();
    }
    if (handleCollisions(floor, object)) {
      if (object.speed.y >= 0) {
        object.speed.y = 0;
      }
      object.position.y -= 1;
      
    }
    if (handleCollisions(roof, object)) {
      if (object.speed.y < 0) {
        object.speed.y = 0;
      }
      object.position.y += 1;
    }*/
    handleDrag(object, drag);
    handleGravity(object, gravity);
  };
  //handles the meat of this program, uses the sides of both objects to see whether or not it has collided
  function handleCollisions(obj1, obj2) {
    findSides(obj1);
    findSides(obj2);
    //if colliding with player

    if (objects.orbs[obj1].sides.left <= objects.orbs[obj2].sides.right &&
      objects.orbs[obj1].sides.right >= objects.orbs[obj2].sides.left &&
      objects.orbs[obj1].sides.top <= objects.orbs[obj2].sides.bottom &&
      objects.orbs[obj1].sides.bottom >= objects.orbs[obj2].sides.top) {
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
    var distance = Math.abs(objects.orbs[obj1].middle[xy] - objects.orbs[obj2].middle[xy]);
    return distance;
  }
  /*function yeet(object, power) {
    findSides(object);
    setVelocityX(object, (((mouse.position.x - object.middle.x) / 10) * power));
    setVelocityY(object, ((mouse.position.y - object.middle.y) / 10) * power);
  };*/
  function setVelocityX(object, speed) {
    objects.orbs[object].speed.x = speed;
  };
  function setVelocityY(object, speed) {
    objects.orbs[object].speed.y = speed;
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
    //if (!handleCollisions(floor, object)) {
      objects.orbs[object].speed.y += gravity;
    //};
    //if (handleCollisions(floor, object)) {
      //add function in response to touching floor here
    //};
  };
  function setPosition(object) {
    objects.orbs[object].position.y += objects.orbs[object].speed.y;
    objects.orbs[object].position.x += objects.orbs[object].speed.x;
  }
  function updatePosition(object) {
    //use jquery to reposition the selected object on screen
    $(objects.orbs[object].id).css("left", objects.orbs[object].position.x);
    $(objects.orbs[object].id).css("top", objects.orbs[object].position.y);
  };
  function findPosNeg(object) {
    //finds if an object is travelling left or right and returns 1 or -1
    return (objects.orbs[object].position.x > mouse.position.x ? 1 : -1);
  };
  function handleSideCollisions(obj1, obj2, side1, side2) {
    findSides(obj1);
    findSides(obj2);
    if (objects.orbs[obj1].sides[side1] <= objects.orbs[obj2].sides[side2]) {
      // collision detected!
      return true;
    }
  }
  function findSides(object) {
    //find the sides of any given object by using its width, height, x, and y
    objects.orbs[object].sides = {
      right: objects.orbs[object].position.x + objects.orbs[object].width,
      left: objects.orbs[object].position.x,
      top: objects.orbs[object].position.y,
      bottom: objects.orbs[object].position.y + objects.orbs[object].height,
    };
    objects.orbs[object].middle = {
      x: objects.orbs[object].position.x + (objects.orbs[object].width / 2),
      y: objects.orbs[object].position.y + (objects.orbs[object].height / 2),
    };
  };
  function handleDrag(object, drag) {
    if (objects.orbs[object].speed.x > 0) {
      objects.orbs[object].speed.x = Math.max(0, objects.orbs[object].speed.x - drag);
    }
    if (objects.orbs[object].speed.x < 0) {
      objects.orbs[object].speed.x = Math.min(0, objects.orbs[object].speed.x + drag);
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