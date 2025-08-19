const express = require("express");
const { pingControllerV1 } = require("../../controllers/ping_controller.js");

const pingRouterV1 = express.Router();


function checkRequest(req, res, next) {
    console.log("Checking the request");
    next();
    console.log("Ending Check Request");
}

function logger(req, res, next) { 
    console.log("Logging Request");
    next();
    console.log("Ending Log Request");
}

function authChecker(req, res, next) {
    console.log("Auth Checked");
    next();
    console.log("Ending Auth Request");
}


pingRouterV1.get("/", [checkRequest, logger, authChecker], pingControllerV1);

module.exports = pingRouterV1;
