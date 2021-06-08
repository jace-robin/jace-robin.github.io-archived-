/* global $, sessionStorage */
var keycodes = ["~","~","~","~","~","~","~","tab","~","~","enter","~","~","shift","ctrl","alt","capslock","~","~","~","~","escape","~","~","~","~","space","~","pagedown","end","home","left","up","right","down","~","~","~","printscreen","insert","delete","~","0","1","2","3","4","5","6","7","8","9","~","~","~","~","~","~","~","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","leftwindowkey","rightwindowkey","selectkey","~","~","numpad0","numpad1","numpad2","numpad3","numpad4","numpad5","numpad6","numpad7","numpad8","numpad9","multiply","add","~","subtract","decimalpoint","divide","f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","numlock","scrolllock","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","MyComputer(multimediakeyboard)","MyCalculator(multimediakeyboard)","~","~","semicolon","equalsign","comma","dash","period","forwardslash","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","~","openbracket","backslash","closebracket","singleqoute"];

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
  //$(document).on('keyup', handleKeyUp)
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
    console.log (event);
  }
  /*function handleKeyUp(event) {
    console.log (event);
  }*/
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /*function reduceSpeed (ROD) {
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
  }*/
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
};
