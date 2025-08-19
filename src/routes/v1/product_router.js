const express = require("express");
const { createProduct } = require("../../controllers/product_controller.js");
const { createProductValidator } = require('../../middlewares/product_middlewares.js')

const productRouterV1 = express.Router();

productRouterV1.get("/", createProduct);

productRouterV1.post("/", createProductValidator, createProduct);

module.exports = productRouterV1;
