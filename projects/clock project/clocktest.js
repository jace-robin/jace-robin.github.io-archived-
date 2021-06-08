function update() {
document.GetElementById("moneyCount").innerHTML = currentMoney
}

var lastLoop = new Date();
function gameLoop() { 
    var thisLoop = new Date();
    var fps = 1000 / (thisLoop - lastLoop);
    lastLoop = thisLoop;
}