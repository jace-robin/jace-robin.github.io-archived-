// flag to prevent running simultaneous sorts by clicking 
// "start" multiple times
let STARTED = false;

$(document).ready(function(){
    $("#goButton").on("click", function(){
        if (!STARTED){
            STARTED = true;
            bubbleSort(bubbleList);
            quickSort(quickList, 0, quickList.length-1);
        }
    })
})