const express = require("express");

const v2Router = express.Router();

const pingRouterV2 = require('./pingRouterV2.js')
const productsRouterV2 = require('./productRouterV2.js')

v2Router.use("/ping", pingRouterV2);
v2Router.use("/products", productsRouterV2)

module.exports = v2Router;
