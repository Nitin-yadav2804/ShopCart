const express = require("express");
const { productControllerV1 } = require("../../controllers/productController.js");

const productRouterV1 = express.Router();

productRouterV1.get("/", productControllerV1);

module.exports = productRouterV1;