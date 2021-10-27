$(document).ready(runProgram);


function runProgram() {
    function toggleSketch() {
        alert("clicked");
        if ($("#sketchBox").css(display, none)) {
            $("#sketchBox").css(display, block);
        }
        else $("sketchBox").css(display, none);
    }
}