const express = require("express");
const { pingController } = require("../../controllers/ping_controller.js");

const pingRouterV1 = express.Router();

pingRouterV1.get("/", pingController);

module.exports = pingRouterV1;
