/* global $, sessionStorage */
<script src="jace-robin.github.io/keycodescript.js"> </script>
$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp)
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
   
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    var keyPressed = keycodes[event - 1];

  }
  function handleKeyUp(event) {
    var keyReleased = keycodes[event - 1];

  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function reduceSpeed (ROD) {
        if (speedX < 0) {
            speedX += ROD;
        }
        else if (speedX > 0) {
            speedX -= ROD;
        };

        if (speedY < 0) {
            speedY += ROD;
        }
        else if (speedY > 0) {
            speedY -= ROD;
        };
  };
  function collision () {
        if (positionX <= canvas.)
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
