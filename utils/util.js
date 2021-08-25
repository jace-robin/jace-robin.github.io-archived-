///////////////////
//Object Methods//
//////////////////
var c = {
    //change methods
    text: function (id, desired) {
        //change the text of id
        $(h.id(id)).text(h.quote(desired));
    },
    color: function (id, color) {
        //change color of id to color input
        $(h.id(id)).css("color", h.quote(color));
    },
    x: function (id, x) {
        $(h.id(id)).css("left", h.quote(x));
    },
    y: function (id, y) {
        $(h.id(id)).css("top", h.quote(y));
    },
};
var h = {
    //helper methods
    quote: function (text) {
        //add quotations to input
        return ('"' + text + '"');
    },
    id: function (text) {
        //add quotations and '#' to input
        return ('"#' + text + '"');
    },
    class: function (text) {
        //add quotations and '#' to input
        return ('".' + text + '"');
    },
};
var u = {
    //utility methods
    h: function () {
        
    },
};
