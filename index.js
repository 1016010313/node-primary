var server = require("./server.js");
var router = require("./route.js");
var requestHandles = require("./requestHandle.js");

var handle = {};
handle["/"] = requestHandles.start;
handle["/start"] = requestHandles.start;
handle["/upload"] = requestHandles.upload;
handle["/show"] = requestHandles.show;


server.start(router.route, handle);