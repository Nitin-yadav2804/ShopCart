const express = require("express");

const { productControllerV2 } = require("../../controllers/productController.js");

const productRouterV2 = express.Router();

productRouterV2.get("/", productControllerV2);

module.exports = productRouterV2;