# Platformer

### An intro to video game programming featuring Halle in a configurable platformer

 **Table of Contents**
 
- [Objective](#objective)
    - [Where to Code](#where-to-code)
    - [Requirements and Grading](#requirements-and-grading)
- [Functions](#functions)
- [Lesson Steps](#lesson-steps)
    - [TODO 1: Platforms](#todo-1-platforms)
    - [TODO 2: Cannons](#todo-2-cannons)
    - [TODO 3: Collectables](#todo-3-collectables)
    - [TODO 4: Make your level challenging](#todo-4-make-your-level-challenging)
    - [TODO 5: Go Live](#todo-5-go-live)

# Objective 
# (Must Read)

The goal is to design one level of a platformer game using the functions defined in the `js/factory` folder. DO NOT WORK IN THAT FOLDER. You will call these functions in the corresponding files located in the `js/init` folder to create the platforms, add cannons, and collectables that Halle must collect. To test your project, you will need to preview the `index.html` file found in your `platformer` folder.

It's up to you to design a level that is challenging but doable. Consider <a href="http://phaser.io/examples/v2/category/tweens" target="_blank">tweening</a> platforms, cannons, and collectables for an additional challenge.

## Where to Code?

Open up your `platformer` folder. Then, open up 3 files:

1. `js/init/platform.js`: Follow the instructions outlined in the file to design all required platforms for the game level.
2. `js/init/cannon.js`: Follow the instructions outlined in the file to design all required cannons for the game level.
3. `js/init/collectable.js`: Follow the instructions outlined in the file to design all required collectables for the game level.

You see instructions on **where to write your code** - keep your code in between the areas **ALL YOUR CODE GOES BELOW HERE** and **ALL YOUR CODE GOES ABOVE HERE**. This will help you make less errors. For example:

```
////////////////////////////////////////////////////////////////////////
// ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

createCollectable(type.steve, 200, 170, 6, 0.7);

// ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////
```

Code a little, **save your work** (Command / Ctrl + s), switch back to the tab running your game and **refresh the page** (Command / Ctrl + r) to see your work!

Have fun!

## Requirements and Grading
1. 30% : You must create at least 3 cannons in different locations. 
2. 30% : You must have at least 3 collectables of different types.
3. 30% : You must include at least 5 platforms 
4. 10% : Your game must be playable!

<hr> 


## Functions
## (Can skip if comfortable with functions)

Functions are predefined blocks of code that can accept input, perform an action, and can return a value. They can be reused many times to perform that action on command.

A **Function Declaration** determines what data the function accepts, what operations are performed, and what value is returned. 

Here is an example of a Function Declaration called `createCannon`:

```javascript
function create(x, y, scaleX, scaleY, immovable) {
    var platform = game.platforms.create(x, y, 'platform');
    platform.scale.setTo(scaleX || 1, scaleY || 1);
    platform.body.immovable = immovable || true;
    return platform;
}
```

This Function accepts 5 pieces of input data: `(x, y, scaleX, scaleY, immovable)`, called **Parameters**. The Function uses that data to create a platform which is returned by the Function. 

Function Declaration simply define how a function operates - it does not execute the code until a **Function Call** is made.

Here is an example of a function call to the `create` function:

```javascript
createPlatform(400, 200, 1, 2, true);
```

A function call can be made by providing the same headline as the function definition but with actual data values, or **Arguments**, in the place of the parameters. 

Calling the Function tells the computer to jump into the Function Declaration and execute each line written in the `{ Code Block }` replacing each Parameter with an Argument.

This Function call will create a platform with an (x,y) location of `(400, 200)` with an X-Scale-Factor of `1`, ad Y-Scale-Factor of `2`, and the immovable property set to `true`. 

# Lesson Steps
# (Must Read All of this)

## Run the program
Right click on your `index.html` file and select "Preview with Live Server".

## TODO 1: Platforms

GOAL: Add as many platforms necessary to make your level challenging.

Find and open the file `js/init/platform.js` and use the the `createPlatform()` Function to create platforms for the level. 

`createPlatform()` takes these arguments: 

```javascript      
/*
createPlatform(x, y, scaleX, scaleY);
 
x: The x coordinate for the platform.
y: The y coordinate for the platform.
scaleX: OPTIONAL The scale factor on the x-axis, this value will stretch the platform in width.
scaleY: OPTIONAL The scale factor on the y-axis, this value will stretch the platform in height.
*/
 ```

Here is an example function call:

```javascript
createPlatform(400, 460);           // normal platform
createPlatform(300, 200, 0.3)       // small horizontal platform (30% the normal width)
createPlatform(500, 500, 0.3, 10)   // tall vertical wall (30% the normal width and 10x the height)
```

<hr> 

# Very Important:
1) In most 2D games, the y-axis is inverted. This means that a y value of 500 is closer to the bottom of your screen than a y value of 100. For examples of what this means, click on the "examples" button below. 
2) The dimensions of your game world are **900 x 700**, so keep that in mind as you move forward.

<details> <summary> Examples </summary>

`createPlatform(0, 100)` puts a platform here

<img width=500 src="asset/readme/y_is_100.png">

`createPlatform(0, 500)` puts a platform here

<img width=500 src="asset/readme/y_is_500.png">

</details>


## TODO 2: Collectables

GOAL: Add as many collectables as necessary (at least 3, and remember they need to be of different types) to make your level challenging.

Find and open the file `js/init/collectable.js` and use the `createCollectable()` Function to create collectables for the level. 

`createCollectable()` takes these arguments:

```javascript
/*
createCollectable(type, x, y, gravity, bounce);

type: The type of the collectable. 
x: The x coordineate for the collectable.
y: The y coordineate for the collectable.
gravity: OPTIONAL The gravitational pull on the collectable.
bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
*/
```

Here is an example function call:

```javascript
createCollectable(type.steve, 200, 170, 6, 0.7);
```

Below are the following `types` available:

```javascript
type.db         // worth 10 points
type.max        // worth 20 points
type.steve      // worth 30 points
type.grace      // worth 40 points
type.kennedi    // worth 50 points
```

<hr> 

## TODO 3: Cannons

GOAL: Add as many cannons as necessary (at least 3) to make your level challenging. 

Find and open the file `js/init/cannon.js` and use the `createCannon` Function to create cannons for the level. The `createCannon` Function takes these arguments:

```javascript
/*
createCannon(type, position, delay);

type: The type of cannon to be made. This can be one of the following Strings: "top", "bottom", "left", or "right"
position: The position coordinate for the cannon along the wall it is placed.
delay: OPTIONAL The number of milliseconds to wait before firing the first projectile

*/
```

Here is an example function call:

```javascript
createCannon("top", 450); // a cannon on the top of the screen, located at x = 450
createCannon("left", 300, 1000); // a cannon on the left side of the screen, located at y = 300, with a 1 second delay (1000ms)
```
<hr> 

### WARNING
**Placing the cannons outside of bounds of the game will cause it to crash instantly!**

## TODO 4: Make your level challenging!

Now that you have platforms, cannons, and collectables make your game unique and challenging! In order to get full credit your project must be playable! Specifically, 
* It must be possible to collect all collectables
* It must require changing height to reach at least some collectables (jumping, falling, or a combination)
* It must require active avoidance of cannon projectiles (i.e. you can't put all cannons in a corner)

###

<hr>

## TODO 5: Go Live

In your bash terminal, enter the following commands, pressing ENTER after each one:

`git add .`

`git commit -m 'add portfolio.html file'`

`git push`

Give it a couple minutes and you should be able to view the additions to your website live on the web at `username.github.io` (Where `username` is your own GitHub username.)

Great work! Pat yourselve on the back and show off your game!
