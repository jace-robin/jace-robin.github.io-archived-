const express = require('express'),
	cors = require('cors');
var sensorRoutes = require('./../routes/sensors');
var actuatorRoutes = require('./../routes/actuators');
var app = express();
app.use(cors());
app.use('/pi/sensors', sensorRoutes);
app.use('/pi/actuators', actuatorRoutes);
module.exports = app;
app.get('/', function (req, res) {
	res.send('Some response for accessing the root');
});
app.get('/pi', function (req, res) {
	res.send('Some response for accessing the root');
});
// I have looked through all files ip: 192.168.68.249