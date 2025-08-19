const express = require("express");

const {
  createProduct
} = require("../../controllers/product_controller.js");

const productRouterV2 = express.Router();

productRouterV2.get("/", createProduct);

module.exports = productRouterV2;
