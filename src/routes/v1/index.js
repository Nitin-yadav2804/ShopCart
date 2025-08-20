const express = require("express");

const v1Router = express.Router();

const pingRouter = require('./ping_router.js')
const productsRouter = require('./product_router.js');
const categoryRouter = require("./category_router.js");

v1Router.use("/ping", pingRouter);
v1Router.use("/products", productsRouter);
v1Router.use("/categories", categoryRouter);

module.exports = v1Router;
