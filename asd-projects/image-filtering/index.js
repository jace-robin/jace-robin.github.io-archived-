// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');
    // TODO: Call your apply function(s) here
    backgroundColor = rgbStringToArray(image[0][0]);
    applyFilterNoBackground(reddify);
    applyFilterNoBackground(decreaseBlue);
    applyFilterNoBackground(increaseGreenbyBlue);


    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////
// TODO 1 & 3: Create the applyFilter function here
function applyFilter(filterFunction) {
    for (var i = 0; i <= image.length - 1; i++) {
        for (var j = 0; j <= image[i].length - 1; j++) {
            var rgbString = image[i][j];
            var rgbNumbers = rgbStringToArray(rgbString);
            filterFunction(rgbNumbers)
            //
            
            //
            rgbString = rgbArrayToString(rgbNumbers);
            image[i][j] = rgbString;
                    }
                }
            };
// TODO 5: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
    for (var i = 0; i <= image.length - 1; i++) {
        for (var j = 0; j <= image[i].length - 1; j++) {
            var rgbString = image[i][j];
            var rgbNumbers = rgbStringToArray(rgbString);
            //console.log(backgroundColor);
            if (rgbNumbers[RED] !== backgroundColor[RED] && rgbNumbers[BLUE] !== backgroundColor[BLUE] && rgbNumbers[GREEN] !== backgroundColor[GREEN]) {
                filterFunction(rgbNumbers);
            }
            else {
                //filterFunction(rgbNumbers);
            }
            //

            //
            rgbString = rgbArrayToString(rgbNumbers);
            image[i][j] = rgbString;
                    }
                }
};

// TODO 2 & 4: Create filter functions
function reddify(array) {
    array[RED] = 255;
};
function decreaseBlue(array) {
    array[BLUE] = Math.max(0, array[BLUE] - 30);
};
function increaseGreenbyBlue(array) {
    array[GREEN] = Math.min(255, array[GREEN] + array[BLUE]);
};

// CHALLENGE code goes below here
