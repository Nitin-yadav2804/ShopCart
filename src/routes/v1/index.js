const express = require("express");

const v1Router = express.Router();

const pingRouter = require('./ping_router.js')
const productsRouter = require('./product_router.js')

v1Router.use("/ping", pingRouter);
v1Router.use("/products", productsRouter)

module.exports = v1Router;
