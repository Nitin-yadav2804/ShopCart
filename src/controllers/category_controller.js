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


module.exports = {
    createCategory
}
 