const express = require("express");
const { pingControllerV1 } = require("../../controllers/pingController.js");

const pingRouterV1 = express.Router();

pingRouterV1.get("/", pingControllerV1);

module.exports = pingRouterV1;
