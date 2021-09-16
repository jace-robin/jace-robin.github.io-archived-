# iot-automatic-routing

Automate route creation for your Pi server

**Table of Contents**
 
- [Setup](#setup)
- [Lesson Steps](#lesson-steps)
    - [TODO 1: Use Automation](#todo-1-use-automation)
    - [TODO 2: createRouter Function](#todo-2-createrouter-function)
    - [TODO 3: generateRoute Function](#todo-3-generateroute-function)
    - [TODO 4: populateLinks Function](#todo-4-populatelinks-function)
    - [TODO 5: Update the Converter](#todo-5-update-the-converter)

## Setup
* This project should be completed on your Pi. **DO NOT WORK ON THIS PROJECT UNTIL PI-INYOURFACE IS COMPLETED**
* Open a new terminal on your Pi (putty or otherwise)
* Enter the command `cd <your GitHub repository's name>` to enter your repository directory
* Enter the command `cd iot-projects` to enter your iot-projects directory
* Enter the command `cp -r pi-inyourface/* automatic-routing` to copy your completed pi-inyourface's work into the automatic-routing directory
* Enter the command `cd automatic-routing` to enter the new project's directory
* Run the command `npm install websocket lodash onoff node-dht-sensor express cors epoll body-parser xmlhttprequest node-json2html` to make sure you have all required libraries installed

## Project Goals
The purpose of this project is to have your program do the following:

1. Automatically generate routes (i.e. most of those lines like `router.route('/pi/sensors').get(function(req, res){})` will be replaced with automation)
2. Automatically generate links to other resources for easier navigation when visiting your Pi in the browser
3. Automatically place links into response headers

To accomplish these tasks, you will be making use of a recursive function, as well as multiple `for-in` loops. This will also involve removing some work you've already done, which you probably already expected since we are trying to automate some tasks that you've already completed on your own.

## Lesson Steps
This project is the final part of the multi-project undertaking that is setting up a server to allow others to interface with your Pi. There are essentially five main tasks for you to perform. These tasks are:

1. Create a new file called `automate.js` (by far most of the work; taking up 3 TODOs)
2. Import `automate.js` into your `http.js` file and use it
3. Comment out the lines importing and using your `sensors.js` routing file
4. Update your `actuators.js` routing file to only handle `PUT` requests
5. Update your `converter.js` file to automatically generater links to subresources of your Pi

### TODO 1: Use Automation
This first TODO has a large number of small steps. All of the steps contribute to using automation to generate the routes for your server, rather than manually creating them. You will find that once you are done, you will actually have more routes than you had created previously.

#### Step 1: Create the `automate.js` file
Create a new file in your `routes` folder called `automate.js` (command: `touch routes/automate.js`). In this file, add in the following two lines (the first and last line, respectively):

```js
// first line
const express = require('express');

// last line
module.exports = createRouter;
```

You will be doing much more with this file later. Right now, you just need to make sure it exists.

#### Step 2: Update your `actuators.js` file
Not all routes can be automated (easily). We are only going to automate the route creation for `GET` requests. As such, you will still need to handle `PUT` requests on your own. Still, you will need to remove handling of `GET` requests from your current files.

To do so, you need to remove all routes from your `actuators.js` file except for the `PUT` handler. In the end, your file should look similar to 

```js
const express = require('express'),
	router = express.Router(),
	resources = require('./../resources/model'),
	ledsPlugin = require('./../plugins/internal/ledsPlugin');


router.route('/leds/:id').put(function(req, res, next) {
	var selectedLed = resources.pi.actuators.leds[req.params.id];
	selectedLed.value = req.body.value;
	req.result = selectedLed;
	ledsPlugin.switchOnOff[req.params.id](req.body.value);
	next();
});

module.exports = router;
```

Depending on how you programmed your own `actuators.js` file, it might not look exactly like the code above, but your file should have the same functionality.

#### Step 3: Update the `http.js` file
This step will disconnect your http server from the sensors routes and instead connect it to the route automation file. There are several things that need to happen here to accomplish that. In case it isn't obvious, you should work in the `http.js` file for this.

1. Comment out or delete the line that imports `sensors.js`
2. Comment out or delete the line with `app.use('/pi/sensors', sensorRoutes);`
3. Comment out or delete the `app.get` lines involving `'/'` and `'/pi'`
4. At the top of the file, add the line `const createRouter = require('./../routes/automate');`
5. At the top of the file, add the line `const resources = require('./../resources/model');` if it does not already exist
6. Just above where you have `app.use(converter())`, add the line `app.use('/', createRouter(resources));`

Those first two task disconnect the http server from the sensors routes that you create manually, and the second two tasks import and connect the server to your route automation (to be programmed right after this);

You won't be able to test anything yet, but once you complete TODO 2, you will be able to start testing.

### TODO 2: createRouter Function
There are three functions that you will need to create for your `automate.js` file. The first function creates the router itself and kicks off the route automation. 

**CODE:** Create a function called `createRouter` that takes in a single object as a parameter. This parameter should be the root resource of your device, so name it appropriately. The function itself can be built from three lines of code. 

1. The first line should create a new router using `express.Router()`, and it should assign that new router to a variable.
2. The second line of code should call the function that will kick off the route creation. For now, just leave a comment on the second line saying to call the appropriate function later.
3. Finally, your function should return your new router.

At this point, your code should be safe to test, though you won't see much happening. If you want to verify that the router is being created, however, you can put a `console.log` statement into your `createRouter` function to see if it prints when you start your server.

### TODO 3: generateRoute Function
This TODO is a big one, as it is responsible for generating all routes for your server and semi-responsible for attaching the links to both the response header and to your web pages whenever resources are accessed in the browser. You will work inside of the `automate.js` file for this one.

#### Step 1: Create and call the `generateRoute` function
**CODE:** Create a function called `generateRoute` that takes two parameters. The first parameter is the router being used and should be called `router`. The second parameter is an object representing the resource that the route corresponds to. You can name it `resource`.

Before filling in the body of the function, go back to your `createRouter` function and call `generateRoute` with your new router and the root resource as arguments.

#### Step 2: Create the route (when appropriate)
This is the biggest step, and the main point of this function. You will want to create the route for the given resource, but only if there is a link associated with the resource. Assuming the resource parameter was named `resource`, you can perform the check with the following code:

```js
if (resource.link){
    // create the route
}
```

Here, `resource.link` contains the route URL that should be used with the route. Not all resources have a link, so this check must be made before attempting to create a route for a resource. 

You can also use `resource.link` when specifying the URL for the new route. For example, in the old way of creating routes, you would have had to have put

    router.route("/pi/sensors").get(function (req, res, next){...});

If you wanted to make a route to the Pi's sensors. Now, you can put

    router.route(resource.link).get(function (req, res, next){...});

**CODE:** If you haven't already done so, make the `if` statement and create the route using code similar to the example above. As for the callback function for `.get()`, you will want it to do 5 things

1. Create an object storing all links to subresources (for now, leave the object empty, but name the object `links`)
2. Put the list of links into the response header. You can do that with the line `res.links(links);`
3. Put the list of links as part of the response. You can do that with the line `req.links = links`;
4. Assign the current resource to `req.result`
5. Call the `next` function

That's it! You'll need to do more with the `links` object before everything works, but we can save that for later. Right now, you are able to create a route automatically! You just need to make sure that the function creates routes for *all* resources, and that will be taken care of in Step 3

#### Step 3: Make routes for all resources
In order to make routes for all resources, you'll need to make your `generateRoute` function recursive. All resources on your Pi are objects, and many of them contain other resources as properties within themselves. 

If you recall, back in the `http.js` file, you called `createRouter` with `resources` as an argument. There, `resources` corresponded to the Gateway Root of your Pi. It had the subresource of `resources.pi`. `resources.pi` has subresources `.sensors`, `.actuators`, and `.actions` (the last of which you haven't used before, but it exists). 

So, if you were to loop over all properties of a given resource, you could access the subresources recursively. That's exactly what you are going to do here.

**CODE:** Make a `for-in` loop over your current `resource` object. Because not all properties of the resource are more resources (e.g. `.name` is just a string), you will need to check if a property is another resource. For simplicity, we will assume that any object is a resource. You can check if a value is an object using the following code:

```js
if (typeof someValue === "object"){
    // do something with the object
}
```

Use that check inside of your `for-in` loop. If a given property's value is indeed an object, then call `generateRoute` again, but this time with the subresource as the second argument (you should use the same `router` for the first argument).

**HINT:** To make a for-in loop over an object called `genericObject`, where the loop grabs the value of every property, you could use the following code:

```js
for (var key in genericObject){
    var value = genericObject[key];
}
```

**TESTING**

After you've completed the for-in loop, you can test your code by running the server. If all goes well, you should get responses by visiting the URLs for the different resources of the Pi. If it works, then congratulations! You've automated route creation for your Pi server!

### TODO 4: populateLinks Function
One thing that any good Web of Things Thing should do is provide a list of links in the response header. You're already plugging an empty `links` object into the response header with your line of `res.links(links)`, but you need to actually generate a list of links. That's what this next function is for. You will work inside of the `automate.js` file for this one.

#### Step 1: Create and call the `populateLinks` function
**CODE:** Begin by creating a function called `populateLinks` that accepts a single object parameter (you can call it `resource`).

Once the function is created, then up in your `generateRoute` function, find where you are giving an empty object to the `links` variable, and replace the empty object with a call to `populateLinks` (give the current `resource` as an argument).

#### Step 2: Create the skeleton for `populateLinks`

**Step 2-a:** Before anything else, create an empty object called `linkObject` on the first line of the function. Then, return that object on the last line. The rest of the function body will go between those two lines, and will be dedicated to building up a list of resource links.

**Step 2-b:** You will need another `for-in` loop here. This one should loop over the `resource` parameter. Make the loop. The rest will be handled in Step 3

#### Step 3: Program the for-in loop

**Step 3-a:** A for-in loop iterates over an object's properties. You will first need to check if current property's value is an object or not (see TODO 3, Step 3 if you need a refresher as to how).

**Step 3-b:** If the current value is an object, place it into a variable called `subResource`. This is optional, but recommended, and the next steps will assume you do so.

**Step 3-c:** Check if the `subResource` has a link property (See TODO 3, Step 2). If it does, then add a new property to your `linkObject`. The new property should have a key of `subResource.name`, and it should have a value of `subResource.link`.

That's it! Completing this step successfully guarantees that the response header will include a list of all subresource links for any given resource. Furthermore, it means that the `req` data will also include the links for later processing. Both of these things are because of the code you put in the `generateRoute` function, where you already assigned the result of `populateLinks` to a `links` variable. 

**TESTING**

To verify that the links are being created successfully, start up your `wot-server` once again. In a separate terminal, type in the following command:

    curl -v localhost:8484/pi/

You should see a large response, but about halfway down, you should see this line:

`Link: </pi/sensors>; rel="Sensors List", </pi/actuators>; rel="Actuators List", </pi/actions>; rel="Actions List"`

If that shows up, then so far everything is working successfully.

### TODO 5: Update the Converter
This final step will generate links on resource web pages in your browser. For this step, you will need to work in the `converter.js` file.

#### Step 1: Change what is sent back for HTML responses
Find where you have `res.send()` for your HTML response. You will want to replace that with the following code:

```js
console.log("sending html");
let response = json2html.transform(req.result, transform);
let links = generateLinks(req.links);

res.send(response + links);
```

#### Step 2: Create a `generateLinks` function
This is the final step for this project. Here, you will want to generate some HTML that will provide links to all subresources from a given resource's web page.

**CODE:** 
1. Create a function called `generateLinks` that will take a single argument called `linkList`
2. Inside the function, create a variable called `html` and assign it the starting value of `<h4>Links</h4>`
3. Create a `for-in` loop that will loop over `linkList`. In the body of the loop, append the following to `html` with each iteration:
    
    `"<a href="+linkList[link]+">"+link+"</a><br>";`

4. Return `html`

**TESTING**

When finished, simply restart your server and try going to one of your resource URLs. From now on, they should have links to all subresources (try going to `localhost:8484/` directly and follow the links from there).

If it works, then congratulations! You've made your Pi server much more user friendly, and now it's easier to add and remove components from it as well!
