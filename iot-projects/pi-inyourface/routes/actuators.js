const ledsPlugin = require('./../plugins/internal/ledsPlugin');
const express = require('express'),
	router = express.Router(),
	resources = require('./../resources/model');
router.route('/').get(function (req, res, next) {
	req.result = (resources.pi.actuators);
	next()
});
router.route('/leds').get(function (req, res, next) {
	req.result = (resources.pi.actuators.leds);
	next()
});
router.route('/leds/:id').get(function (req, res, next) {
	req.result = (resources.pi.actuators.leds[req.params.id]);
	next()
}).put(function (req, res, next) {
	var currentLED = resources.pi.actuators.leds[req.params.id]
	currentLED.value = req.body.value
	req.result = currentLED
	ledsPlugin.switchOnOff[req.params.id](req.body.value);
	next()
});


module.exports = router;
