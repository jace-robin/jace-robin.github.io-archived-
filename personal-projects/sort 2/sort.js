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
    $("#newEntries").on('click', newEntries);
    function newEntries() {
        var string = $("#input").val();
        setArray(string)
    }
    function setArray(string) {
        var stringInput = "";
        var arrayReturn = [];
        var arrayIndex = 0;
        for (var i = 0; i >= string.length; i++) {
            checkArray(i, stringInput);
        }
        function checkArray(i, string) {
            if (checkNum()) {
                i++;
                checkNum();
            }
            else {
                arrayReturn[arrayIndex] = string.charAt(i);
                arrayIndex
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