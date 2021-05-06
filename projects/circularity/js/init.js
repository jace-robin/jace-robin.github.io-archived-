var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle;
        var circles = [];

        // TODO 2 : Create a function that draws a circle 
        function drawCircle () {
<<<<<<< HEAD
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
            physikz.addRandomVelocity(circle, canvas, 3, 3);
            view.addChild(circle);
            circles.push(circle);
        };

        // TODO 3 / 7 : Call the drawCircle() function 
        for (var count1 = 0; count1 <= 100; count1++) {
            drawCircle();
        }
        
=======
        circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
        physikz.addRandomVelocity(circle, canvas);
        view.addChild(circle);
        circles.push(circle);
        }

        // TODO 3 / 7 : Call the drawCircle() function 
        for (var repeat = 0; repeat <= 100; repeat ++) {
        drawCircle ()
            }
>>>>>>> 0c8b19cd4494d1deb1146cd1cb6d8c1f8e9e0711
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
<<<<<<< HEAD
            for (var count2 = 0; count2 <= circles.length - 1; count2++) {
                var eachCircle = circles[count2]
                physikz.updatePosition(circles[count2]);
                game.checkCirclePosition(circles[count2]);
=======
            for (var count = 0; count <= 100; count ++) {
            physikz.updatePosition(circles[count]);
            physikz.checkCirclePosition(circles[count]);
>>>>>>> 0c8b19cd4494d1deb1146cd1cb6d8c1f8e9e0711
            }
            
            // TODO 5 : Call game.checkCirclePosition() on your circles.


            // TODO 8 : Iterate over the array
           
            
        };
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if (circle.x > canvas.width) {
                circle.x = 0;
            }
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if (circle.x < 0) {
                circle.x = canvas.width;
            }
            if (circle.y > canvas.height) {
                circle.y = 0;
            }
            if (circle.y < 0) {
                circle.y = canvas.height;
            }
<<<<<<< HEAD
=======

>>>>>>> 0c8b19cd4494d1deb1146cd1cb6d8c1f8e9e0711

            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
