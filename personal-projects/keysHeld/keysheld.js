$(document).ready(runProgram);

function runProgram() {
$(document).on('keydown', handleKeyDown);
$(document).on("keyup", handleKeyUp);
///////////////////
//Object Methods//
//////////////////
    var c = {
        //change methods
        t: function (id, desired) {
            //change the text of id
            $(h.id(id)).text(h.q(desired));
        },
        c: function (id, color) {
            //change color of id to color input
            $(h.id(id)).css("color", h.q(color));
        },
    };
    var h = {
        //helper methods
        q: function (text) {
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
    ///////////////
    //Update Text//
    ///////////////
    function getKeys() {
        for (var i = 0; i >= Object.keys(keyStatus).length; i++) {
            if (keyStatus[keyObject.i] === true) {
                
            }
        }
    };

    function handleKeyDown(event) {
        var key = ('"' + keyObject[event.which] + '"');
        keyStatus[key] = true;
        console.log(key);
      };
    function handleKeyUp(event) {
        var key = ('"' + keyObject[event.which] + '"');
        keyStatus[key] = false;
        console.log(key);
      };
};