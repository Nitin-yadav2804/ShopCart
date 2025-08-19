const { StatusCodes, ReasonPhrases } = require('http-status-codes')

const ProductService = require('../services/product_services.js')

function createProduct(req, res) {

    try {
        
        const response = ProductService.createProduct(req.body);

        return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    error: {},
                    message: ReasonPhrases.CREATED + " Product",
                    data: response
         })
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

function getProducts(req, res) {
    try {
        const response = ProductService.getProducts();

        return res
                .status(StatusCodes.OK)
                .json({
                    success: true,
                    error: {},
                    message: "Successfully fetched the products",
                    data: response
         })
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

function getProduct(req,res) {
    try {
        const response = ProductService.getProduct(req.params.id);

        return res
                .status(StatusCodes.OK)
                .json({
                    success: true,
                    error: {},
                    message: "Successfully fetched the product",
                    data: response
         })
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProduct
}
 