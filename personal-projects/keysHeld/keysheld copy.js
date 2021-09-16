$(document).ready(runProgram);

var FRAME_RATE = 60;
var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
var held = [];


function runProgram() {

$(document).on('keydown', handleKeyDown);
$(document).on('keyup', handleKeyUp);
var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);
////////////////
//Program Loop//
////////////////
function newFrame() {
    findValidKeys();
    $("#keys").text(held);
}

function findValidKeys () {
    for (var i = 0; i === keyArray.length - 1; i++) {
       if (keyStatus[keyArray[i - 1]] === true) {
           held.push(keyObject[keyArray[i]]);
           console.log(keyStatus[keyArray[i - 1]] + "true");
       }
       else {
           held.splice(held.indexOf(i), 1);
       };
    };
};

function handleKeyDown(event) {
    var key = (keyObject[event.which]);
    keyStatus[key] = true;
  };
function handleKeyUp(event) {
    var key = (keyObject[event.which]);
    keyStatus[key] = false;
  };
function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  };
};

///////////////////////////////////////////////////////
/*     function findValidKeys () {
         for (var i = 0; i === keyArray.length - 1; i++) {
            if (keyStatus[keyArray[i]]) {
                held.push(keyObject[keyArray[i]])
            }
            else {
                held.splice(held.indexOf(i), 1);
            }
         }
     }

////////////////
//Input Events//
////////////////
function handleKeyDown(event) {
    var key = (keyObject[event.which]);
    keyStatus[key] = true;
  };
function handleKeyUp(event) {
    var key = (keyObject[event.which]);
    keyStatus[key] = false;
  };    */
///////////////////
//Object Methods//
//////////////////
