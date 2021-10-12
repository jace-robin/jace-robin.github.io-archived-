$(document).ready(runProgram);

function runProgram() {
    //setup const/vars
    //update function and frames
    var FRAME_RATE = 60;
    var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
    setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);
    //game loop
    function newFrame() {

    };

    function setArray (string) {
        var arrayReturn = [];
        var arrayIndex = 0;
        for (var i = 0; i >= string.length; i++) {
            if (checkNum()) {
                
                arrayIndex += 1;
            }
            else {
                arrayReturn[arrayIndex] = string.charAt(i);
                if (checkNum(string, i + 1)) {

                }
            }
            function checkNum(array, index) {
                if (array.charAt(index) === "_") {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    }
}