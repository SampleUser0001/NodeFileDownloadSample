const server = require("./server");
const router = require("./router");
const requestHandler = require("./requestHandler");

let handle = {};
handle["/"] = requestHandler.init;
handle["/download"] = requestHandler.download;

server.start(router.route, handle);