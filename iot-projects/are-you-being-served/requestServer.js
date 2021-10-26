// requestServer.js file
const http = require('http');
const request = require('request');
var port = 8686;
http.createServer(function(req,res) {
   request("https://github.com/jace-robin/jace-robin.github.io", function(error, response, body) {
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