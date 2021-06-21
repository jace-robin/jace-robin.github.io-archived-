///////////////////////
//Entity Declaration//
//////////////////////
var object = {
  speedX: undefined,
  speedY: undefined,
  x: undefined,
  y: undefined,
  controller: undefined,
  type: undefined,
}
//////////////////
//Key Detection//
/////////////////
function handleKeyDown(event) {
  var key = keyarray[event.which - 1];
    if (!keysHeld.includes(key)) {
      keysHeld.push(key);
      console.log(keysHeld);
    }
    else {

    }
  };
function handleKeyUp(event) {
      var key = keyarray[event.which - 1];
      if (keysHeld.includes(key)) {
        keysHeld.splice(keysHeld.indexOf(key), 1);
        console.log(keysHeld);
        }
    };
/////////////////////
//Movement And Drag//
////////////////////
addVelocity ($id, x, y) {
  var object = $id;

}