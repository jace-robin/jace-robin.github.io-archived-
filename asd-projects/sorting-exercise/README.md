# ASD Sorting
Use recursion and implement sorting algorithms

**Table of Contents**
- [Overview](#Overview)
  - [Learning Objectives](#learning-objectives)
  - [Project Grading](#project-grading)
- [TODOs](#todos)
  - [TODO 0: Study Existing Code (no coding)](#todo-0-study-existing-code-no-coding)
  - [TODO 1: Create the `swap` Function](#todo-1-create-the-swap-function)
  - [TODO 2: Implement Bubble Sort](#todo-2-implement-bubble-sort)
  - [TODO 3: Create the `quickSort` Function](#todo-3-create-the-quicksort-function)
  - [TODO 4: `partition` Part 1](#todo-4-partition-part-1)
  - [TODO 5: `partition` Part 2](#todo-5-partition-part-2)
  - [TODO 6: Stress Test and Push](#todo-6-stress-test-and-push)
  - [Submit Your Work](#submit-your-work)

# Overview

<img src="img/sort-example.gif">

In this project you will be building a program that sorts rows of images based on the number of images in the row. You will perform the sort using both bubble sort and quicksort. Note that each row corresponds to an object, and each object has a property called `value` that you will use to sort.

## Learning Objectives
- Practice bubble sort algorithm
- Practice recursion
- Practice quicksort algorithm

## Project Grading

### Best Practices (25 points)

1. Use the built-in constants instead of magic numbers - 5 points
2. Use comments to describe your functions are doing - 15 points
3. Use proper indentation - 5 points

### Program Progress (75 points)

* TODO 0 - 0 points, but important to go through anyway
* TODO 1 - 10 points
* TODO 2 - 15 points 
* TODO 3 - 20 points 
* TODO 4 - 15 points 
* TODO 5 - 15 points 
* TODO 6 - 0 points
* Challenge - 10 points (bonus)
**NOTE:** the bonus will not give you a score of over 100 should you earn that many points, but can be done as an alternative to the required TODOs.

# TODOs

## TODO 0: Study Existing Code (no coding)

Before you begin working, you should notice that thre are three JavaScript files already there. They are as follows:

1. **setup.js:** This file contains a lot, but there are only two things that you need to be aware of.
    * Constants for setup - affect the number of rows and the ordering of them, as well as the speed at which elements are sorted. You may change these, and they are as follows:
        * `SLEEP_AMOUNT`: the lower this value, the faster the sort animation 
        * `MAX_SQUARES`: the number of rows that need to be sorted
        * `SEED`: affects the random order of rows
        * `FACTOR`: affects the random order of rows
        * `INCREASE`: affects the random order of rows
    * Constants for managing the drawing on the screen. These constants are `IMAGE_SIZE`, `MAX_SQUARE_WIDTH`, and `MAX_SQUARE_HEIGHT`, and they should not be changed.
    * Constants for jQuery references and arrays - all constants not listed above fall into this category. You should not change any of them. You will have to use some of them for your project, however. Those constants are also listed in your `index.js` file for your convenience, and they are as follows:
        * `bubbleCounter`: the CSS id of the counter used for displaying the number of swap operations that occurr during bubble sort
        * `quickCounter`: the CSS id of the counter used for displaying the number of swap operations that occurr during quicksort
2. **run.js:** This file registers the "Start" button with the event manager. You won't need to do anything with this file.
3. **index.js:** This is the only file you will be required to work with, and it is where you will implement your sort functions. Some helper functions have already been created for you. They are as follows:
    * `sleep`: this (sort of) pauses execution so that your sorting can be redrawn one step at a time.
    * `drawSwap`: this function redraws your screen to show the updated ordering every time a swap occurs. You must tell it which array to redraw from, and which to element indexes have been swapped.
    * `updateCounter`: this function updates the specified counter after a swap occurs.

Once you have looked over the above and are comfortable with it, move on to the rest of the project below.

## TODO 1: Create the `swap` Function
Your first task is to create the following function.

* Name: `swap`
* Parameters:
    1. `array`: the array whose elements need to be rearranged
    2. `i`: the index of the first element to swap
    3. `j`: the index of the second element to swap
* Returns: Nothing
* Description: `swap` switches two elements of the provided array. The elements are at indexes `i` and `j`. ***After*** the two elements have been swapped, the helper function `drawSwap` (already provided) should be called with the arguments `(array, i, j)`. 

**Hint:** You may need to create a temporary variable to complete the swap successfully.

## TODO 2: Implement Bubble Sort

The goal of this TODO is to implement bubbleSort. Here is a description of the function you must create.

* Name: `bubbleSort`
* Parameters:
    1. `array`: the array whose elements need to be sorted
* Returns: Nothing
* Description: `bubbleSort` sorts all elements of the provided array from smallest to largest. It should also update the relevant swap counter and run at the specified rate so that the sorting can be properly visualized.

### Step 1: Create the function skeleton

For this step, simply create the function as described above and set it up to take in the required parameters. 

**IMPORTANT:** You must add the `async` keyword before the word `function`. This is required to make your sorting compatible with the `sleep` function, which is necessary to visualize your sorting. So, your function declaration should look like

```js
    async function nameOfFunction(params){}
```

### Step 2: Implement a basic bubble sort

Implement bubble sort. Your comparison should check if the element with the lower index has a greater value than the element with the higher index. For more of an explanation, click the arrow below.

<details> <summary> Bubble Sort Walkthrough </summary>

Bubble sort requires two nested loops. 

The outer loop will iterate over the entire provided `array` (simple enough, right?). 

The inner loop will iterate over all elements of the provided `array` that are **greater** than the current index (counter) of the outer array. Because the outer loop's index changes, you will have to use that index to calculate where to start our inner loop on each pass (hint: start at an index exactly `1` greater than the outer loop's current index value.)

The body of the inner loop will be a comparison. Because the outer loop's index will always be lower than the inner loop's (check for yourself that this is true!) **you only need to see if the element at the outer loop's index is greater than the element at the inner loop's index.** If so, then you should call `swap` with your `array` and two indexes (the two loop counting variables) as arguments.

**IMPORTANT REMINDER:** The elements of the `array` are all objects with a special property called `value`. **You should compare the two elements' `value` properties when deciding which element is greater.** (example: `array[0].value` would get the value property from element `0` of the `array`)

</details>

### Step 3: Make the sorting display properly

The final step for bubble sort is to make sure that it displays the sorting and counter as it runs. To do so, simply add the following lines of code to your `if` statement's code block (put them after you call `swap`).

```js
updateCounter(bubbleCounter);
await sleep();
```

`updateCounter` updates the counter with the id stored in `bubbleCounter`, while `await sleep()` works with the `sleep` function (one of the helper functions provided for you) to make sure that the sorting displays step by step.

### Step 4: Test your code

You should test your code by opening it with live server and clicking the "Start" button. If the rows of bubbles end up sorted from smallest to largest, then you've completed `bubbleSort`!

## TODO 3: Create the `quickSort` Function

`quickSort` is interesting, because it "requires" a helper function to work properly. You will deal with the helper function in TODOs 4 and 5. For this part, you will only need to make the actual `quickSort` function itself. You will not be able to test it until after TODO 4, however.

Here is a description of the function you must create.

* Name: `quickSort`
* Parameters:
    1. `array`: the array whose elements need to be sorted
    2. `left`: the leftmost index being considered for this pass through `quickSort`
    3. `right`: the rightmost index being considered for this pass through `quickSort`
* Returns: Nothing
* Description: `quickSort` sorts all elements of the provided array from smallest to largest. It does this by repeating the following three steps:
    1. call the `partition` function to partially sort the array and decide on a "partition" index. The partition index is used to divide the array for further sorting
    2. Call `quickSort` on all unsorted elements of the array to the left of the partition index (if two or more exist)
    3. Call `quickSort` on all unsorted elements of the array to the right of the partition index (if two or more exist); the element at the partiton index is included for the sorting

### Step 1: Create the function skeleton

For this step, simply create the function and set it up to take in the required parameters. 

**IMPORTANT:** Just as with the `bubbleSort` function, you must add the `async` keyword before the word `function`. This is again required to make your sorting compatible with the `sleep` function, which is necessary to visualize your sorting. So, your function declaration should look like

```js
    async function nameOfFunction(params){}
```

### Step 2: Implement `quickSort`

Because recursion can get complicated quickly, we will break this down into four substeps.

#### **Substep 1:** Check if `quickSort` should do anything

Before anything else, check if the `array` length is greater than `1`. If it is not, then you do not need to do anything else in the function. If it is, **then all of the code in substeps 2-4 should be run.**

#### **Substep 2:** Call the `partition` function

Create a new variable called `index`. This will store the "partition" index for future steps. You will obtain the value for `index` by calling `partition` with the arguments `(array, left, right)`. 

However, because `partition` will call `sleep`, you will need to also use the `await` keyword when calling `partition`. This must go immediately before the function call and after the assignment operator. Here is what the line should look like.

```js
    var index = await functionName(arguments);
```

#### **Substep 3:** Call `quicksort` for the left of the pivot index

After you call `partition`, you must do the following.

1. Check if the parameter `left` is less than `index-1`
2. If it is, then call `quickSort` with the arguments `(array, left, index-1)`. You must also put the `await` keyword before the `quickSort` call.


#### **Substep 4:** Call `quicksort` for the right of the pivot index

After your code from Substep 3, you must do the following.

1. Check if the parameter `right` is greater than `index`
2. If it is, then call `quickSort` with the arguments `(array, index, right)`. You must also put the `await` keyword before the `quickSort` call.

## TODO 4: `partition` Part 1

Now that you have the `quickSort` function complete, you only need to complete the `partition` function.

Here is a description of the function you must create.

* Name: `partition`
* Parameters:
    1. `array`: the array whose elements need to be sorted
    2. `left`: the leftmost index being considered for this pass through `partition`
    3. `right`: the rightmost index being considered for this pass through `partition`
* Returns: A number representing the new partition index for `quickSort` (recall that the partition index in `quickSort` is obtained by calling `partition`)
* Description: `partion` has several jobs in this program:
    1. Figure out the new partition index for `quickSort`
    2. Decide on a `pivot` value (used to partially sort the array)
    3. Move all elements greater than `pivot` to the right of `pivot`
    4. Move all elements less than `pivot` to the left of `pivot`
    5. Update the counter and run the sorting at the specified rate for visualization purposes

If that seems like a lot, don't worry. We will approach this problem one step at a time, and several of those tasks will be taken care of in TODO 5. 

For this TODO, you will only need to:

1. Create the function skeleton
2. Decide on a pivot
3. Set up an important loop
4. Return the new partition index (it won't be calculated properly yet, however)

### Step 1: Create the function skeleton

As usual, the first thing to do is create the function skeleton based off of the name and parameters described above.

You will also need to put the `async` keyword before the function declaration. By now, you should know how to do that, but if you don't, you can reference one of the earlier TODOs to remind yourself.

### Step 2: Decide on a pivot

A "pivot" is a value that you use to decide where other values should go. If the pivot is the number `5`, for instance, then all numbers less than `5` should be put on the left of the pivot in the array, and all numbers greater than `5` should be put to the right of it.

Truthfully, a random pivot is ideal (note: the pivot must exist within the array, however). That said, because we want it to be easier to test, we recommend using the following code to decide on the pivot:

```js
array[Math.floor((right + left)/2)].value;
```

This picks the middle element's value between `left` and `right` as the pivot value. This is not random, so you can expect the program to sort the same list the same way every time.

Take the line of code above and assign it to a new variable called `pivot`.

### Step 3: Set up an important loop

To decide on the partition index for `quickSort`, you will need to change `left` and `right` until `left` is greater than `right`. Because of how you change the two variables, you don't know how many changes will be necessary before that happens. 

This means you will need a `while` loop. The `while` loop should run for as long as `left` is less than `right`.

Put the `while` loop into your function after your `pivot` variable declaration. The loop should not do anything yet, so just give it an empty code block.

### Step 4: Return the new partition index

This step is simple. You only need to do two things.

1. Check if `left` equals `right`. If the two are equal, then increase `left` by `1`.
2. After the check, return `left` from the function.

The value of `left` once `partition` has finished running is the new partition index for `quickSort`. 

You need to make sure that `left` doesn't equal `right` at the end, because otherwise `quickSort` will (usually) never end. This is because of our choice of `pivot`. If we had said that `pivot = array[right].value` at the beginning, for example, we would not need to make this extra check.

## TODO 5: `partition` Part 2

Here, you will complete the `partition` function. You will do so by finally filling in the code block for the `while` loop. There are three parts to the `while` loop's code, and we will go through them in turn.

Keep in mind that what is happening here is two things at once.

1. The partition index is being decided
2. The program is searching for values that need to be swapped.

All of this is happening inside of `while` loop. The `while` loop finishes when `left` is not less than `right`, which means you've looked at every element in this section of the array. Now, let's make those two things happen!

### Step 1: First inner while loop

If an element's value is less than the pivot, you don't need to do anything with it. Because of that, you can use a `while` loop to shift the value of `left` until it finds a value greater than the pivot value.

In other words, you need to create a `while` loop that does the following:

1. Runs while the current `left` element's `value` property is less than the `pivot` value.
2. The body of the loop should increase `left` by `1` each pass.

**Hint:** Don't forget that `left` is an index number. Also don't forget that `array` is an array of objects. So, if you wanted to see if the first element's value is `10`, you could do so with the following code:

    if (array[0].value === 10) {}

### Step 2: Second inner while loop

If you got Step 1 working, this one is easy. You need to do the same thing, but this time for the `right` element and in reverse. 

Make another `while` loop that runs as long as the `right` element's `value` property is greater than `pivot`. As long as that is true, decrease `right` by `1`.

### Step 3: Swap when ready

After both of the inner while loops have run, the value at index `left` must be greater than the `pivot`, and the value at index `right` must be less than the `pivot`. This can happen for one of two reasons. 

1. `left` is now greater (or equal to) `right`, in which case we don't want to do anything.
2. The `left` and `right` elements need to be swapped!

You need to check for the second case. Make a conditional that checks if `left` is still less than `right`. If it is, then you must do the following three things (in order).

1. Call `swap` with arguments `(array, left, right)`
2. Call `updateCounter` with the argument `quickCounter`
3. Call `await sleep();`

Once that is done, you should be done! Save your work and test your code!

## TODO 6: Stress Test and Push

If everything is working so far, then head into `setup.js` and change a few things around. 

Increase `MAX_SQUARES` to something big (but not too big; the CSS starts to fail with larger numbers). Try a number between `100` and `1000`.

Decrease `SLEEP_AMOUNT` to something small, so you can watch the sorting happen faster. The bigger `MAX_SQUARES`, the smaller `SLEEP_AMOUNT` should be (`0` at the minimum).

Test your program again to really see the difference between bubble sort and quick sort.

# Submit Your Work

Submit your work regularly. Because these files are already being tracked by your GitHub repo, you can skip the "git add" step. Instead, enter the following commands:

```bash
git commit -a -m "saving sorting exercise"
git push
```

Congratulations on implementing sort algorithms!
