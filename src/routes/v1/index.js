const express = require("express");

const v1Router = express.Router();

const pingRouterV1 = require('./ping_routerV1.js')
const productsRouterV1 = require('./product_routerV1.js')

v1Router.use("/ping", pingRouterV1);
v1Router.use("/products", productsRouterV1)

module.exports = v1Router;
