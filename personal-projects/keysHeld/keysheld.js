$(document).ready(runProgram);
var held = [];
function runProgram() {
$(document).on('keydown', handleKeyDown);
$(document).on('keyup', handleKeyUp);
////////////////
//Program Loop//
////////////////
};

///////////////////////////////////////////////////////


////////////////
//Input Events//
////////////////
function handleKeyDown(event) {
    var key = (keyObject[event.which]);
    keyStatus[key] = true;
    if (!held.includes(key)) {
        held.push(key);
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
///////////////////
//Object Methods//
//////////////////