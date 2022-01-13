// requestServer.js file
const http = require('http');
const request = require('request');
var port = 8686;
var args = process.argv.slice(2);
http.createServer(function(req,res) {
    var url = args[0] ? args[0] : "https://github.com/UBG100/ubg100.github.io";
    request(url, function(error, response, body) {
        if (!body || !response || (error === null && response.statusCode !== 200)) {
            res.end("bad URL\n");
            return;
        };
        if (!error === true) {
            if (response.statusCode === 200) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(body);
                res.end();
            }
        }
        else {
            if (response.statusCode !== 200)
            res.writeHead(response.statusCode, {'Content-Type': 'text/plain'});
            res.write(error.toString());
            res.end();
        }
    }
)}).listen(8686);