const express = require("express");
const { createProduct, getProducts, getProduct } = require("../../controllers/product_controller.js");
const { createProductValidator } = require('../../middlewares/product_middlewares.js')

const productRouterV1 = express.Router();


productRouterV1.post("/", createProductValidator, createProduct);
productRouterV1.get("/", getProducts);
productRouterV1.get("/:id", getProduct);

module.exports = productRouterV1;
