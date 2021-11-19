const resources = require('./../../resources/model');
const sensorDriver = require('node-dht-sensor');
const {
    resourceLimits
} = require('worker_threads');

let interval, sensor;
const device = resources.pi.sensors.dht;
let localParams = {
    'frequency': 2000
};

function connectHardware() {
    sensor = {
        initialize: function () {
            sensorDriver.initialize(device.model, device.gpio);
        },
        read: function () {
            let saved = sensorDriver.read()
            device.temperature.value = parseFloat(saved.temperature);
            device.humidity.value = parseFloat(saved.humidity);
        },
    }
    sensor.initialize();
    sensor.read();
    interval = setInterval(function () {
        sensor.read();
    }, localParams.frequency);
}
exports.start = function (params) {
    localParams = params ? params : localParams;
    connectHardware();
}
exports.stop = function() {
    clearInterval(interval)
}