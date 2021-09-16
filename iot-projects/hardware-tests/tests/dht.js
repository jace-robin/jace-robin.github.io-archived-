var sensorLib = require('node-dht-sensor');

sensorLib.initialize(22, 17); 
var interval = setInterval(read, 2000);

function read() {
  var readout = sensorLib.read();
  console.log(readout);
  console.log('Temperature: ' + readout.temperature.toFixed(2) + 'C, ' +
    'humidity: ' + readout.humidity.toFixed(2) + '%');
};

process.on('SIGINT', function () {
  clearInterval(interval);
  console.log('Bye, bye!');
  process.exit();
});

