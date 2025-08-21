const { StatusCodes, ReasonPhrases } = require('http-status-codes')

const CategoryService = require('../services/category_service.js');
const CategoryRepository = require('../repositories/category_repository.js');

const categoryService = new CategoryService(new CategoryRepository())

async function createCategory(req, res) {

    try {
        
        const response = await categoryService.createCategory(req.body);

        return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    error: {},
                    message: ReasonPhrases.CREATED + " Category",
                    data: response
         })
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

async function getAllCategories(req, res) {

    try {
        
        const response = await categoryService.getAllCategories();

        return res
                .status(StatusCodes.OK)
                .json({
                    success: true,
                    error: {},
                    message: "Successfully Fetched Categories",
                    data: response
         })
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

async function getCategory(req, res) {

    try {
        
        const response = await categoryService.getCategory(req.params.id);

        return res
                .status(StatusCodes.OK)
                .json({
                    success: true,
                    error: {},
                    message: "Successfully Fetched Category",
                    data: response
         })
    } catch (error) {
        console.log("Something went wrong", error);
    }
}


module.exports = {
    createCategory,
    getAllCategories,
    getCategory
}
 