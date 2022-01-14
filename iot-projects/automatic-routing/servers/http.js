var converter = require('./../middleware/converter')
var bodyParser = require('body-parser');
const resources = require('./../resources/model');
const express = require('express'),
	cors = require('cors');
var actuatorRoutes = require('./../routes/actuators');
var app = express();
app.use(bodyParser.json())
app.use(cors());
app.use('/pi/actuators', actuatorRoutes);
app.use('/', createRouter(resources));
app.use(converter());
module.exports = app;

// I have looked through all files ip: 192.168.68.249