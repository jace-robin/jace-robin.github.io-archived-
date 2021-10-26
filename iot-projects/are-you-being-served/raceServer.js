const http = require("http");
const async = require("async");

const port = 8686;

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    let racers = ["Green Ambler", "Catalack", "Steel Runner", "G.I. Jogger"];

    // TODO 7: Get the start time for the race
    let d = new Date();
    let startTime = d.getTime()
    // TODO 12: Make the whole thing parallel
    async.parallel( 
        // TODO 9: Supply an array of functions
        [
            function a (callback) {
                wrapper(callback);
            },
            function b (callback) {
                wrapper(callback);
            },
            function c (callback) {
                wrapper(callback);
            },
            function d (callback) {
                wrapper(callback);
            },
        ],
        function (error, results) {
            // TODO 10: add a callback function to the end of the async call to tally the results 
            res.write("Results:\n");
            var victoryOrder = sortTogether(racers, results);
            for (var i = 0; i < victoryOrder.length; i++) {
                res.write(victoryOrder[i] + "\n");
            }
            var d = new Date();
            var endTime = d.getTime();
            var totalTime = endTime - startTime;
            totalTime = totalTime.toString();
            res.write(totalTime + "\n");
            res.end();
        }
    );
    
}).listen(port);

// TODO 8: create a common function to be called by all functions in the array passed to the async function
function wrapper(callback){
    setTimeout(function (){
        var d = new Date();
        callback(null, d.getTime);    
    }, Math.random() * 5000);
}

function sortTogether(names, times) {
    var tempList = [];
    for (var i = 0; i < names.length; i++) {
        tempList.push({'name': names[i], 'time': times[i]});
    }

    tempList.sort(function(a, b) {
        return ((a.time < b.time) ? -1 : ((a.time == b.time) ? 0 : 1));
    });

    for (var i = 0; i < tempList.length; i++) {
        names[i] = tempList[i].name;
    }
    return names;
}
