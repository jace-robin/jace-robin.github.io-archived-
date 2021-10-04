'use strict' 
var _ = {};

_.setup.frame = function() {
    var frame_rate = 60;
    var frame_interval = 1000/frame_rate;
    setInterval (frame_interval, update);
}
_.setup.spawn = function (){
    let x;
}
_.factory.create = function (name, id, color, x, y) {
        var i = {
            name: name,
            id: id,
            color: color,
            position: {
                x: x,
                y: y,
            },
            width: width,
            height: height,
        };
        return (i);
}
_.factory.change = function (id, attr, desired) {
    $(id).css(attr, desired);
}
_.output.alert = function(message) {
    alert(message);
}
