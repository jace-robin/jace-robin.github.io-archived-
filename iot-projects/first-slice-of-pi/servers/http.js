const express = require('express'),
	cors = require('cors');
var app = express();
app.use(cors());
module.exports = app;
app.get('/', function (req, res) {
	res.send('Some response for accessing the root');
});
app.get('/pi', function(req, res){
    res.send('Some response for accessing the root');
});
// I have looked through all files ip: 192.168.68.249