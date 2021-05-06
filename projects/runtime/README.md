Runtime!
=========

Meet Halle, the official Operation Spark robot.

![Halle](http://i.imgur.com/yUKA9EN.gif)

Halle has some cool moves but nobody to play with. Let's build our own game using Halle! 

**Table of Contents**
- [Getting Started](#getting-started)
- [Lesson Steps](#lesson-steps)
	- [TODO 1 - Adding The Heads Up Display](#todo-1---adding-the-heads-up-display)
    - [TODO 2 - Adding A Background](#todo-2---adding-a-background)
    - [Reading Time: Drawing With Create.js](#reading-time-drawing-with-createjs)
    - [TODO 3 - Create Your Own Background](#todo-3---create-your-own-background)
    - [TODO 4 - Animate the Background](#todo-4---animate-the-background)
    - [TODO 5 - Creating a Parallax Effect](#todo-5---creating-a-parallax-effect)
    - [TODO 6 - Create your First Obstacle](#todo-6---create-your-first-obstacle)
    - [TODO 7 - Make Many Obstacles](#todo-7---make-many-obstacles)
    - [TODO 8 - Roll Your Own Obstacles](#todo-8---roll-your-own-obstacles)
    - [TODO 9 - Enemies!](#todo-9---enemies)
    - [TODO 10 - Enemy Properties](#todo-10---enemy-properties)
    - [TODO 11 - Enemy Function](#todo-11---enemy-function)
    - [TODO 12 - Design A Reward](#todo-12---design-a-reward)
    - [TODO 13 - Use Level Data to Create Obstacles](#todo-13---use-level-data-to-create-obstacles)
    - [TODO 14 - Go Live](#todo-14---go-live)

# Getting Started

## Installation (IMPORTANT)

### Make sure you can install Runtime

Go to <a href="https://gitpod.io/access-control"> Access Control </a> and check all of the boxes under Github, then save your preferences (if they are all already checked, then you can skip this step).

### Copy and paste the following commands into the bash terminal, then hit ENTER

Open a new bash terminal. Then in the terminal, enter the following commands in order (one at a time):

* cd projects
* git clone https://github.com/operationspark/runtime
* cd runtime
* rm -rf .git*
* npm install -g opspark
* bower install
* cd ../..
* git add -A
* git commit -m "added runtime"
* git push

**Warning:** the `npm install -g opspark` command may take a while to complete

## Run the program
Preview the `index.html` file.

You should see Halle running on a blank background and you should be able to press the appropriate keys to make her jump and shoot. 

Now go back and look at the `index.html` file. `index.html` is an example of the kind of code you might see in a real-world project. The majority of the code is not in `index.html` itself but is loaded as external scripts. 

```
<script src="js/util/load.js"></script>
<script src="js/util/spin.min.js"></script>
<script src="js/util/point.js"></script>
<script src="js/spritesheet.js"></script>
...
<script src="js/view/ground.js"></script>
<script src="js/player/halle.js"></script>
<script src="js/player/playerManager.js"></script>
<script src="js/opspark.js"></script>
```

The scripts are organized so that each script handles one aspect of the game, with each name describing what they do. Professional developers break code into scripts or modules so that the code is easier to understand and so that many people can work on the code at the same time.

Some of the scripts are *library* or *third-party* code. This is code that other people wrote that we can use to do cool stuff.

```html
<script src="bower_components/easeljs/lib/easeljs-0.8.1.min.js"></script>
<script src="bower_components/PreloadJS/lib/preloadjs-0.6.1.min.js"></script>
<script src="bower_components/TweenJS/lib/tweenjs-0.6.1.min.js"></script>
<script src="bower_components/SoundJS/lib/soundjs-0.6.1.min.js"></script>
<script src="bower_components/opspark-draw/draw.js"></script>
```

For this project, we will be using the [create.js](http://createjs.com/) library to draw and animate our game. 

## Brainstorming

Before we start coding, we have to decide what kind of game we want to build with Halle. Look at the kind of moves that Halle can make and imagine how they would fit into **your** game. 

You will need to decide on a general *theme* for the game. What kind of world is Halle in? Is she in space, in a factory, on the streets of New Orleans? 

What are the *game mechanics*? What are the goals and what are the challenges? What might Halle encounter as the game progresses? Are there points or a score? How does the game end? 

Finally, come up with a good *name* for your game. Having a great name for a project is an important step, but don't worry, you can always change it later. 

# Lesson Steps

# TODO 1 - Adding The Heads Up Display

Open up `js/init.js`. This file will help set up the entire game. First we need to add a Heads-Up-Display (or HUD), which will display a health bar and the number of points earned. We've already written one for you in `js/view/hud.js`. You can check it out if you want. If you don't, then the tldr is that the function `opspark.makeHud()` makes and returns a Heads-Up-Display `Object`.

**FIND:** in `init.js` at `TODO 1`

**CODE:** Add the following lines of code into the game to create (first line), view (second line), and register the HUD with the window (third line).
    
    var hud = opspark.makeHud();
    view.addChild(hud);
    window.hud = hud;

Once that is done, you should see the heads-up display! 

![Heads-Up Display](http://i.imgur.com/VG1KvnA.png)

To test that your HUD is working, you can try the following. Run your game from `index.html`, open up the console in Chrome Developer Tools, and type out each of the below statements. Note that the below statements will not affect your code. The effects will only last until you refresh your page.

Hint: To open the Chrome Developer Tools right click on the running application page and select 'inspect'

    hud.updateScore(10);

    hud.updateOf(1000);

    hud.setIntegrity(25);

    hud.setIntegrity(100);

    hud.kill();

# TODO 2 - Adding A Background 

## Step 1 - Initialize the Background

Nice! Now we have something on our screen - but the background is pretty boring. Open up the file `js/view/background.js`. Here we have made a function for you called makeBackground. To have this background appear in our game we need to go back to `js/init.js` and call this function!

**FIND:** `init.js` at `TODO 2`

**CODE:** Add the following code to create (line 1) and view (line 2) the background of your game:

```js
var background = opspark.makeBackground(app,ground);
view.addChild(background);
```

Once this is done correctly you should see Halle on a yellow background. 

![Halle On Yellow Background](http://i.imgur.com/iqo5v3F.png)

## Step 2 - Choose your own background color!

**FIND:** The file `js/view/background.js`, where the variable `backgroundFill` is defined (around line 36).

`backgroundFill` holds the rectangle object returned by the `draw.rect()` function (see Drawing With Create.js below). The `draw.rect()` function takes the following arguments:

    draw.rect(width, height, fillColor)

**CODE:** This is more tweaking than coding, but you should do the following nonetheless.

In the `draw.rect()` function call that creates the yellow background:
- Choose a color that you want for your background and adjust the `fillColor` argument .
- Change the height of the background. Try out the following values and **choose which one you like best**. Try `canvasHeight`, `100`, and `groundY`, or other values if you don't like any of those.

As a last step, depending on the background you've built, your heads-up-display may be hard to see or just plain ugly. Modify the colors used by `js/view/hud.js` to match your background.

# Reading Time: Drawing With Create.js
# (Read if you want to customize graphics)
<details> <summary> Click the arrow to read about adding graphics! </summary>
## NOTE: Do not copy any code in this section. Just read this section. It will help you understand how to customize your background in TODO 3

Create.js is a **library** of functions stored in the `draw` Object that let you add drawings to your program. Each function returns a new Object with properties that define the object's appearance, location on the screen, and much more.

So, in order to draw something you will create a *shape variable* that will hold that object:

Image | Code
------|------
![rect](http://i.imgur.com/gwbZLZl.png)    | `var shape = draw.rect(width, height, color, strokeColor, strokeWidth);`
![line](http://i.imgur.com/Zy8nY0C.png)   | `var shape = draw.line(fromX, fromY, toX, toY, strokeColor, strokeWidth);`
![circle](http://i.imgur.com/Zc9hJqU.png)    | `var shape = draw.circle(radius, color, strokeColor, strokeWidth);`
![image](http://i.imgur.com/BGZCnX8.png)     | `var shape = draw.bitmap('img/moon.png');`

In order to make your shape show on sreen you will need to add it to the `background` by calling

    background.addChild(shape);

Your shape will be created so that it appears at the upper-left hand corner of the screen, at `(0,0)` in your game's coordinate system, but you can place a shape anywhere on the screen by setting its `x` and `y` properties.
    
    shape.x = 100;
    shape.y = 45;

Remember that `x` and `y` refer to a coordinate system which has an origin (0,0) in the upper-left hand corner. `x` becomes larger as you move to the right. `y` becomes larger as you move downward.

![cartesion coordinate system](http://i.imgur.com/jyZuFer.png)

## Helpful Variables

We've defined a couple of variables that should help you draw shapes in the right place.

`canvasWidth` is the total width of the game screen  
`canvasHeight` is the total height of the game screen  
`groundY` is the y coordinate of the ground line  

See the [opspark-draw documentation](https://libraries.io/bower/opspark-draw) for more details on drawing functions you can use or look at the source directly in your project at `bower_components/opspark-draw/draw.js`. You can also use anything in the [create.js API](http://www.createjs.com/docs/easeljs/modules/EaselJS.html).

## Adding your own Images for a bitmap object
The moon.png image is stored in the img folder. You can add your own custom images too! Once you have downloaded the image you would like to add (you can easily find png pictures by adding .png to your google image search) you can upload that file to your workspace. 
- Select the img folder
- Go to File -> Upload Local Files -> Select / Drag & Drop downloaded image. 
- Move that image into the img folder
- call `draw.bitmap()` using 'img/<name of your picture.png>' for the argument

</details>

# TODO 3 - Create Your Own Background

You are free to customize the background however you wish, but you should at least make one prominent feature and one many-component feature (see the stars below). If you don't want to customize the background, then you can simply add a moon and stars as described below.

**NOTE: The order that you add shapes to your background matters so be sure to add any additional shapes *below* where you add backgroundFill to the background.**

**FIND:** `TODO: 3` in `js/view/background.js` within the `render()` function. Both the moon and star field will be created there. If you make a custom background, it should also go there.

## Moon

![Moon](http://i.imgur.com/ntD7AfF.png)

You can add images to your background using `draw.bitmap()`

**CODE:** Add the following code into the render function. You should tweak the variable values to move the moon to a good location (the `x` and `y` properties) and give it the proper size (the `scaleX` and `scaleY` properties).

```js
var moon = draw.bitmap('img/moon.png');
moon.x = 300;
moon.y = 200;
moon.scaleX = 10.0;
moon.scaleY = 10.0;
background.addChild(moon);
```

## Star Field

![Star Field](http://i.imgur.com/Vsdw99h.png)

**CODE:** Use a `for` loop to draw a bunch of objects to the screen. Make at least 100, but at most 1000. The code that should go inside of your for loop is as follows:

```js
var circle = draw.circle(10,'white','LightGray',2);
circle.x = canvasWidth*Math.random();
circle.y = groundY*Math.random();
background.addChild(circle);
```

Try changing the code to make the result look more like actual stars.

# TODO 4 - Animate the Background

### INFO: Animation

If you look in the upper left-hand corner of the game, you will see something like "57 fps". That means the game is running at 57 frames-per-second. Each "frame" is one drawing of our game and so we are redrawing the game 57 times every second. By making slight changes to what we draw over time we can give the illusion of motion. 

In `background.js`, the `render()` function sets up our scene and the `update()` function is called once per frame. Whatever changes we make to the scene are drawn on the next frame. 

## Step 1 - Draw a tree

To illustrate this, let's draw a tree on the screen. We will call it `tree`. 

**FIND:** In `background.js`, above the beginning of the `render` function, there is a comment ` ANIMATION VARIABLES HERE`

**CODE:** Declare a variable `tree` _outside_ the `render` function and directly below that comment.

You must make the `tree` variable there because of something known as "scope". Essentially, by making the `tree` variable outside of the `render` function, it can be used both in the `render` and the `update` functions.

**FIND:** `TODO 4: part 1` inside of the `render` function

**CODE:** store a bitmap in `tree` variable and add it to the background.

```js
tree = draw.bitmap('img/tree.png');
tree.x = 0;
tree.y = 0;
background.addChild(tree);
```

You should now see a tree in your background! Change the values of `tree.x` and `tree.y` so that the tree appears on the ground in front of Halle.

## Step 2 - Move The Tree

We can perform animation by making changes to our scene in the `update()` function. Remember that it is called once for each frame of the game.

**FIND:** `TODO 4: part 2` in the `update` function

The goal is to make the tree move to the left and wrap around the screen if it goes offscreen to the left.

**CODE:** Add the following code:

```js
tree.x = tree.x + 1;

if(tree.x < -200) {
    tree.x = canvasWidth;
}
```

You should now see the tree moving to the right. 

**Figure out why it is going in that direction, then change the code so that the tree moves to the left.**

# TODO 5 - Creating a Parallax Effect

### Parallax

![Parallax](http://www.hallme.com/uploads/parallax-scrolling-mario.gif)

Parallax is a technique in animation for giving the illusion of depth. When you are moving, things that are close to you move quickly whereas things that are very far away may move slowly or not appear to move at all. You will want to do that by adding in more background pieces.

## Step 1 - Add buildings to the background

**FIND:** where the `tree` variable was declared (_NOT_ where it was defined in the `render` function)

**CODE:** After the declaration of `tree` declare a variable `buildings` and assign it an empty array. We will use this array to collect some drawings.

**HINT:** an empty array is simply `[]`

**FIND:** `TODO 5: part 1` inside of the `render` function

**CODE:** create several rectangles using a `for` loop and add them to `buildings` array. You can use the following code, but make sure you understand what each line of it does. 

```js
for(var i=0;i<5;++i) {
    var buildingHeight = 300;
    var building = draw.rect(75,buildingHeight,'LightGray','Black',1);
    building.x = 200*i;
    building.y = groundY-buildingHeight;
    background.addChild(building);
    buildings.push(building);
}
```

You should see this:

![Halle With Buildings](http://i.imgur.com/LSKBOsR.png)

**CODE:** Change how the buildings appear. Give them different heights and colrs than the default.

**CHALLENGE:** Give the buildings random heights.

**HINT:** Math.random() is your friend for making random heights.

![Halle With Buildings With Background](http://i.imgur.com/kyeRy7x.png)

## Step 2 - Animate the buildings using Iteration

**FIND:** `TODO 4: part 2` in the `update` function

**CODE:** Now, write code in `update` that animates the buildings so that they move towards Halle. We already know how to move the `tree` so moving the buildings won't be too hard!

However, our `buildings` Array contains the building objects that we want to move. This means, that **Iteration** is required!

Remember, to iterate, we can create a `for` loop that looks like this:

```js
for (var i = 0; i < myArray.length; i++) {
    var eachElement = myArray[i];

    // code to do something with each element
}

```

Recall what your array name is before making the loop. If you use generic names like 'myArray', your code will not work (because you never made variables with that name)!

## Step 3 - Parallax

**CODE:** Now make the buildings and tree move at different speeds. Recall what determined the tree's direction, because that's the same thing that determines speed!

**CHALLENGE:** Change your building / box drawings to something unique!

# TODO 6 - Create your First Obstacle

You've created a rad background and are now ready to move on to gameplay. You'll be coding up and designing some game elements which Halle can interact with. The game manager provides an API for creating objects which move around the screen and can be run into, jumped over, or shot with Halle's gun. 

An obstacle is the simplest element in our game. It moves at a fixed speed toward Halle as the game progresses. The obstacle must be avoided by either jumping or ducking and cannot be destroyed by being shot with Halle's gun. If the obstacle collides with Halle, Halle takes damage. If Halle takes enough damage, she dies and the game is over. 

## Step 1 - Create the hitzone

**FIND:** in `js/level01.js` inside of the `runLevelInGame` function, look for the comment `// BEGIN EDITING YOUR CODE HERE`

**CODE:** Add in the following lines of code. The first two lines define the size of the hitbox (an invisible region that determines if Hallebot actually touches the obstacle) and how much damage the obstacle causes on impact. The last line creates the obstacle. 

```js
var hitZoneSize = 25;
var damageFromObstacle = 10;
var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
```

**NOTE:** This obstacle has no image or position yet, and has in fact not even been added to the game. 

## Step 2 - Position the hitzone

**CODE:** Position that obstacle hitzone somewhere on screen by modifying the `x` and `y` properties of `sawBladeHitZone`, then add the obstacle to the game. Add this code to the code you just wrote:

```javascript
sawBladeHitZone.x = 400;
sawBladeHitZone.y = 100;
game.addGameItem(sawBladeHitZone);    
```

Once this is done correctly, you should see a gray circle on the screen which moves towards Halle.

![Gray Circle](https://i.imgur.com/Yyk0bEK.png)

**The circle you see on the screen is the "hit zone" for the obstacle**. Once that hit zone collides with Halle, you should see Halle's health indicator decrease by the amount you specified in `damageFromObstacle`. 

Halle has hitzones too. Open up `init.js` and find the `debugHalleHitZones`(line 27) variable and change it to `true` You should now see the circles that make up Halle's hitzone.

**CODE:** Change the `y` property of `sawBladeHitZone` so that it eventually collides with Halle

![Halle Hitzone](https://i.imgur.com/vdwaY4M.png)

## Step 3 - Add an image to your hitzone
The hitzones in our game are used for collision detection and always present, but when we are playing our game we don't actually show them. Instead of circles, we draw something that represents our obstacle. Let's make our first obstacle be a saw blade. 

**FIND:** `level01.js`, right after the last code you wrote.

**CODE:** Add the following code:

```js
var obstacleImage = draw.bitmap('img/sawblade.png');
sawBladeHitZone.addChild(obstacleImage);
```

This loads up an image and adds it to our obstacle. You should now see a saw blade on the screen. 

![Saw blade](https://i.imgur.com/T9eSaWb.png)

You should also notice that saw blade doesn't fit within the hitzone. This is because the top left corner of the box that surrounds the sawblade image is placed at the center of `sawBladeHitZone` hitzone. 

**CODE:** Adjust the `x` and `y` property of `obstacleImage` so that it fits perfectly within the hit zone of `sawBladeHitZone`. Change their values to be exactly the negative of the hitbox size. For example, if the size is 10 (it's not), then you would set both `obstacleImage.x` and `obstacleImage.y` to be `-10`.

When you are done you should see:

![Saw blade correctly positioned](https://i.imgur.com/P6PIIEe.png)

**NOTE:** if you want to hide your hitzones, you can do so by 

1. In `init.js` change the `debugHalleHitZones` variable to false.
2. In `js/level01.js` pass `false` to the method `game.setDebugMode()` 

# TODO 7 - Make Many Obstacles

Now that we know the sequence to make a single sawblade, let's make more! 

Rather than copy-pasting the 10 lines of code each time we want another sawblade, let's instead turn those 10 lines into a **Function**!

**CODE:** Your task is to take the 10 lines of code you just wrote for creating a single sawblade and turn them into a Function that can be reused. 
- The Function should be called `createSawBlade`
- The Function should have 2 parameters: `x` and `y`. These parameters should be used to set the `sawBladeHitZone.x` and `sawBladeHitZone.y` properties.
- Once you have created your Function, call it 3 times with different Arguments for `x` and `y`. You should place the saw blades so Halle can jump over some and duck others.

![Three saw blades](https://i.imgur.com/h1uGz6p.png)

**HINTS:**
<details> <summary> Click the arrow if you want hints! </summary>
To declare a Function, we can write:

```js
function myFunctionName(parameter1Name, parameter2Name) {
    // your code to be reused goes here
}  
```

When turning a sequence of code into a Function that uses Parameters, identify the data values in that sequence that depend on user-input and replace those with Parameters.

For example, consider this sequence that calculates an average of two numbers and then prints it to the console:

```js
var average1 = (20 + 40) / 2;
console.log("the average of " + 20 + " and " + 40 + " is " + average1);	  //==> The average of 20 and 40 is 30

var average2 = (5 + 10) / 2;	
console.log("the average of " + 5 + " and " + 10 + " is " + average2);	  //==> The average of 5 and 10 is 7.5
```

If you wanted to make this sequence into a Function, we might write:

```js
function average(x, y) {

    var average = (x + y) / 2;
    console.log("the average of " + x + " and " + y + " is " + average);
    
}
```

Notice that the hard-coded numbers to be averaged have been replaced by the parameters `x` and `y` each time they are used.

And then we could call the Function, passing in values that will be held by `x` and `y` and then used by the Function:

```js
average(20, 40);	//==> The average of 20 and 40 is 30
average(5, 10);		//==> The average of 5 and 10 is 7.5
```

</details>

# TODO 8 - Roll Your Own Obstacles

You are now ready to add new kinds of obstacles to your game. To do this, decide what kinds of obstacle you want in your game and choose a name for it. As an example, I am going to create a very boring obstacle which I will call "box". **You** should name your obstacle something else, and change the code accordingly.

**CODE:** First, write a function that creates your obstacle (below the `createSawBlade` function). The body of your code should look very similar to the body of your `createSawBlade` function. You will only need to change the details (the image, which you will have to provide/create; the damage; and the hitbox size).

```js
function createMyObstacle(x,y) {
    // code for creating myObstacle
};
```

Then, test it by calling that function directly.

```js
createMyObstacle(100,200);
```

# TODO 9 - Enemies!

Obstacles are only one kind of thing you might find in a game. In most games, you have enemies you have to avoid or shoot as well as different items which you can collect to increase your score or give you powers. These are slightly more complex than obstacles, but you're ready to do them now.

Before we begin, find the call to `game.setDebugMode()` and change the argument to `true` in order to show the hitzones.

**CODE:** We are going to create a new game item similar to how we created our other obstacles. Add the following code:

```js
var enemy = game.createGameItem('enemy',25);
var redSquare = draw.rect(50,50,'red');
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
```

Notice that here we use `game.createGameItem` instead of `game.createObstacle`. These two functions are similar, but `game.createGameItem` gives us more control over how the new object will behave in the game.

So far, you have created the `enemy` object and the rectangle that will be the object's sprite; you have given the red sprite an offset so that it matches the hibox; and you've assigned the sprite to the `enemy` object. Now, we need to position the `enemy` on screen:

```js
enemy.x = 400;
enemy.y = groundY-50;
```

Finally you can call `addGameItem()` in order to show the enemy on screen.

```js
game.addGameItem(enemy);
```

When that is done correctly you should see a red square on the screen. It will not be moving (yet).

![Red Square](https://i.imgur.com/MrpvAjk.png)

Feel free to customize how your enemy looks. Try making it bigger or drawing some other shapes.

# TODO 10 - Enemy Properties

The variable `enemy` is an object created by `createGameItem()` which has a number of properties you can set in order to customize how the item behaves in the game. In this step, we are going to play around with those properties.

## velocityX/velocityY

You may have noticed that our enemy is not moving like the saw blades in the previous steps. That is because a game item created by `createGameItem` does not have any *velocity* when it is first created. A game item's `velocityX` property says how many pixels it will move in the X direction for each frame. Similarly, the `velocityY` property says how many pixels it will move in the Y direction for each frame. 

**CODE:** Try writing this below your last bit of code:

```js
enemy.velocityX = 1;
```

What happened?

Modify the code you just wrote so that the square collides with Halle.

## rotationalVelocity

The `rotationalVelocity` property of a game item allows for you to change the rotation over time. The value of `rotationalVelocity` determines how many degrees the objects rotates in each frame.

**CODE:** Write the code to set the `rotationVelocity` property of the `enemy` game item to the value `10` and see what happens.

## onPlayerCollision

The `onPlayerCollision` property holds a different kind of value. Instead of a number or a string, its value is a function. The function is called whenever that game item collides with Halle. You may have noticed that our enemy passes through Halle without any kind of effect. That is because when the game item is first created, the function in the `onPlayerCollision` property does nothing. 

**CODE:** However, we can change that. First, write an empty function and assign it to the `onPlayerCollision` property.

```js
enemy.onPlayerCollision = function() {
    console.log('The enemy has hit Halle');
};
```

Now, the console will log `"The enemy has hit Halle"` whenever the enemy hits Halle.

Open the JavaScript console and confirm that this is working properly.

To make the enemy do damage when it collides with Halle, you can call the `game.changeIntegrity()` function. You will need to do this inside of the `enemy.onPlayerCollision` function.

Calling it with a negative number:

`game.changeIntegrity(-10);`

causes Halle to lose *integrity* or take damage

Calling it with a positive number:

`game.changeIntegrity(10);`

causes Halle to gain *integrity* or lose damage 

**CODE:** Call `changeIntegrity()` function on the `game` object in your `onPlayerCollision` function to make the enemy do damage to Halle on collision.

## onProjectileCollision

The `onProjectileCollision` property works much like `onPlayerCollision` but instead the function is called whenever Halle successfully shoots the game item.

**CODE:** Write some code that prints out "Halle has hit the enemy" whenever Halle shoots an enemy. Once this is done, you should be able to open the JavaScript console and see the message whenever you shoot an enemy.

The `game.increaseScore()` function lets you change the score of the game. Add this code to the function you just wrote

`game.increaseScore(100);`

You should see your score increase when Halle shoots an enemy.

## Behaviors

`onPlayerCollision` and `onProjectileCollision` are examples of *event callbacks* which allow you to create complex behavior in your game. You can change how your enemy looks or acts in these functions. 

Each game item has three built-in behaviors that you can call in response to events

`fadeOut()` will cause the item to disappear by fading out
`shrink()` will cause the item to decrease in size out of existence
`flyTo(x,y)` will cause the item to quickly move to a place on screen defined by `x` and `y`

**CODE:** Try adding the following code to the function assigned to `enemy.onPlayerCollision`

```js
enemy.fadeOut();
```

Now use one of the behavior functions described above in the function assigned to `enemy.onProjectileCollision` to make the enemy disappear whenever Halle shoots it.

# TODO 11 - Enemy Function

**CODE:** You now should know enough to make your own enemy. To get started, take all of the code you wrote in the last step and move it into a new function called `createEnemy`

```js
function createEnemy() {
    // all code from TODO 11 and 12
}
```

Introduce two parameters `x` and `y` into your function

```js
function createEnemy(x, y) {
    // all code from TODO 11 and 12
}
```

Then use `x` and `y` in your function body to place the enemy in a location given by those parameters.

You can now call the `createEnemy()` function multiple times to make several enemies. 

```js
createEnemy(400,groundY-10);
createEnemy(800,groundY-100);
createEnemy(1200,groundY-50);
```

Once you have completed this step, you will have a working enemy for your game. Now you need to make it your own. Change the code in your `createEnemy` function to customize the enemy for **your** game. 

# TODO 12 - Design A Reward

Now that we have Obstacles and Enemies - we need a reward for HalleBot to get!

**CODE:** Create a reward (a gameItem) with a few special properties:
- When HalleBot collides with it, it should disappear, and either the score should be increased, or Hallebot's health should go up
- It should not disappear when shot

# TODO 13 - Use Level Data to Create Obstacles

In a professional game, there are two important roles:
- game designers build/design a game by determining what components of a game should exist and where.
- the programmers write the code for a game engine which runs on this data

This data, as well as all of the artwork, defines the entire world of the game. Separating the game code from the data allows you to easily modify the behavior and gameplay of the game without actually modifying the code.

For runtime, this data is stored in the `levelData` variable in `js/level01.js`.

**FIND:** the `levelData` variable near the top of `js/level01.js`. It should look like this:

```js
var levelData = {
    "name": "Robot Romp",
    "number": 1, 
    "speed": -3,
    "gameItems": [
	{ "type": "sawblade", "x": 400, "y": groundY },
	{ "type": "sawblade", "x": 600, "y": groundY },
	{ "type": "sawblade", "x": 900, "y": groundY },
    ]
};
```

Notice what is going on here. `levelData` is an object. Inside, there is a property `gameItems` whose value is an **Array** of **Objects**. In `levelData.gameItems`, you should see three Objects, each with a `.type`, `.x`, and `.y` property.

There are three tasks for you to perform. 

### Step 1: add more gameItems to the `gameItems` array.

**CODE:** Add in *at least* one of each of the other types of objects you can create. So, you should have at least three saws, at least one enemy, at least one, reward, and at least one of your custom obstacles.

For instance, to add in a reward, you could put:

    { "type": "reward", "x": 2000, "y": groundY - 60},

The value of the `"type"` property (e.g. "sawblade", "reward") can be whatever you want. Just make sure you keep track of which is which!

### Step 2: make a loop

**CODE:** Your task is to use a for loop, iterate through the `levelData.gameItems` Array, and during each loop, call the `createSawblade()`, `createEnemy()`, `createReward()`, and other "createObstacle" functions using each Object's `.x` and `.y` properties as arguments. You can create this loop directly below the `levelData` object.

To decide on which function to call, you will need to use each Object's `.type` value (for instance, `"sawblade"`) in a series of conditional statements.

### Hints:

<details> <summary> Open to see hints </summary>

**Objects** and **Arrays** are called *collections* because they are used to collect many pieces of data. They are also considered complex because they can hold any data type, including other arrays or objects.

To access an element of an array you can use *Bracket Notation* like so: `array[index]`.

To access a property value in an Object you can use *Dot Notation* like so `object.propertyName`.

For nested collections, use one after the other. To access the first Object in the Array `gameItems` Array which is inside the `levelData` Object we would write:

```js
var firstGameItemObject = levelData.gameItems[0];
```

Then, to access the `.x` and `.y` properties of that Object we could write:

```js
var firstX = firstGameItemObject.x;
var firstY = firstGameItemObject.y;
```

To access the `.type` property of the object, you could write:

```js
var firstType = firstGameItemObject.type;
```

We could then use a conditional to check if the type is `"sawblade"`. If it is, you could create a sawblade using this data:

```js
createSawBlade(firstX, firstY);
```

To run this code with each value in the `levelData.gameItems` Array, we can iterate. Remember, to iterate, we can create a `for` loop that looks like this:

```js
for (var i = 0; i < myArray.length; i++) {
    var eachElement = myArray[i];

    // code to do something with each element
}

```

Now, instead of having to call your `createSawblade()` (and similar) functions each time you want a new obstacle, you can simply add a new gameItem object to the `levelData.gameItems` array and a new obstacle will be dynamically created.


</details>

### Step 3: Cleanup

Now that your loop handles iteration over `levelData.gameItems` and also calling your object creation functions, you don't need the other function calls in your code.

**CODE:** Remove all function calls (except the ones in your for loop) to `createSawblade`, `createReward`, etc.

# TODO 14 - Go Live

With GitHub Pages, once you push your changes from your workspace up to your GitHub repository, your page will be live on the Internet.

To do so, you'll need to enter the following git commands into your bash terminal. Select the bash terminal in the Console View - the bottom window pane in Gitpod.

Enter the following commands, pressing ENTER after each one:

`git add .`

`git commit -m 'add runtime project'`

`git push`

Give it a couple minutes and you should be able to view the additions to your website live on the web at `username.github.io` (Where `username` is your own GitHub username.)

You now have a portfolio on the Internet, whoot!

# Congratulations

You've written your first game! Give yourself a chance to play with what you created. Think about how you could make it better and what you would like to see in the game. Then, try changing the code to make it happen. 

Any of the code in your game can be modified. Look around in the source code and try to understand it. You can read the documentation for [easel.js](http://www.createjs.com/docs/easeljs/modules/EaselJS.html) to draw more interesting shapes or [tween.js](http://www.createjs.com/tweenjs) to make interesting animations. 

Good luck!

