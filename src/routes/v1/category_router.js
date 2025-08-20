const express = require("express");
const { createCategory } = require("../../controllers/category_controller.js");

const categoryRouter = express.Router();


categoryRouter.post("/", createCategory);

module.exports = categoryRouter;
