const express = require("express");

const v2Router = express.Router();

const pingRouterV2 = require('./ping_routerV2.js')
const productsRouterV2 = require('./product_routerV2.js')

v2Router.use("/ping", pingRouterV2);
v2Router.use("/products", productsRouterV2)

module.exports = v2Router;
