const express = require('express'),
	router = express.Router(),
	resources = require('./../resources/model'),
	ledsPlugin = require('./../plugins/internal/ledsPlugin');
router.route('/leds/:id').put(function (req, res, next) {
	var currentLED = resources.pi.actuators.leds[req.params.id]
	currentLED.value = req.body.value
	req.result = currentLED
	ledsPlugin.switchOnOff[req.params.id](req.body.value);
	next()
});

module.exports = router;