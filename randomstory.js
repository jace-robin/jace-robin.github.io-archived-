var name = ["Garry", "Jerry", "Terry", "Matthew"]
var location = ["park", "school", "IHOP", "gym"]
var activity = ["chill", "eat", "fight", "jog"]
function getRandom(input) {
    return input[(Math.ceil(Math.random() * 4) - 1)];
};

console.log (getRandom(name) + " went to the " + getRandom(location) + " to " + getRandom(activity) + ", but " + getRandom(name) + " stopped him, and they started to " + getRandom(activity));