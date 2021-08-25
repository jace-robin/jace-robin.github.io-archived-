$(document).ready(runProgram);

function runProgram() {
$(document).on('keydown', handleKeyDown);
$(document).on("keyup", handleKeyUp);
///////////////////
//Object Methods//
//////////////////
    var c = {
        //change methods
        text: function (id, desired) {
            //change the text of id
            $(id).text(desired);
        },
        color: function (id, color) {
            //change color of id to color input
            $(id).css("color", color);
        },
        x: function (id, x) {
            $(h.id(id)).css("x", h.quote(x));
        }
    };
    var h = {
        //helper methods
        quote: function (text) {
            //add quotations to input
            return ('"' + text + '"');
        },
        id: function (text) {
            //add quotations and '#' to input
            return ('"#' + text + '"');
        },
    };
    var u = {
        //utility methods
        h: function () {
            //held keys
        },
    };
////////////////////
//Var Declarations//
////////////////////
var held = []
///////////////
//Update Text//
///////////////
    function getKeys() {
        for (var i = 0; i >= Object.keys(keyStatus).length; i++) {
            var ii
            keysHeld[i]=keyStatus[keyObject[i]];
            if (keyStatus[keyObject[i]]) {

            }
        };
    };

    function handleKeyDown(event) {
        var key = ('"' + keyObject[event.which] + '"');
        keyStatus[key] = true;
        if (!held.contains(key)) {
            held.push(key);
        }
        alert("test");
      };
    function handleKeyUp(event) {
        var key = ('"' + keyObject[event.which] + '"');
        keyStatus[key] = false;
        if (held.contains(key)) {
            held.splice(held.indexOf(key), 1);
        }
        console.log(key);
      };
////////////////
//Program Loop//
////////////////
};