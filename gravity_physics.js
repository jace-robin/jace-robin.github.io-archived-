var gravityPull = 3
var startX = 5
var x = startX
var jumpStrength = 8
function gravity(strength){
    while (true) {
        if (x >> 5) {
            x -= strength
            console.log (x);
            console.log ("in air");
        }
        if(x === 5) {
                console.log ("on ground");
                }
            }
        };
function handleJump(jumpStrength) {
        };