// first line
const express = require('express');

function createRouter(root) {
    var router = new express.Router()
    generateRoute(root, resource)
    return (router);
}

function generateRoute(router, resource) {
    if (resource.link) {
        router.route(resource.link).get(function (req, res, next){
            let links = {};
            res.links(links);
            req.links = links;
            //below line maybe swapped? confusing wording
            resource = req.result
            next()
        });
        for (var i in resource){
            if (typeof resource[i]==="object") {
                for (var n in resource[i]) {
                    generateRoute(resource[i], resource[i][n]);
                    var val = genericObject[n];
                }
            }
        }
    }
}

// last line
module.exports = createRouter;