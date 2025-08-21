const express = require("express");
const { createCategory, getAllCategories, getCategory } = require("../../controllers/category_controller.js");

const categoryRouter = express.Router();


categoryRouter.post("/", createCategory);
categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id", getCategory);


module.exports = categoryRouter;
