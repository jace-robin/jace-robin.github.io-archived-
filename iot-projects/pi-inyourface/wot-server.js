const ledsPlugin = require('./plugins/internal/ledsPlugin');
const pirPlugin = require('./plugins/internal/pirPlugin');
const dhtPlugin = require('./plugins/internal/dhtPlugin');
const websockets = require("./servers/websockets")

const httpServer = require('./servers/http'),
	resources = require('./resources/model');
const server = httpServer.listen(resources.pi.port, function () {
	websockets.listen(server);
	console.log("Running the Pi on port " + resources.pi.port);
});


process.on('SIGINT', function () {
	pirPlugin.stop();
	dhtPlugin.stop();
	ledsPlugin.stop()
	process.exit();
});

pirPlugin.start({});
dhtPlugin.start({
	'frequency': 2000
});
ledsPlugin.start()