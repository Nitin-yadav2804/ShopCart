function productControllerV1(request, response) {
    return response.json({message: 'Products from v1 API'})
}

function productControllerV2(request, response) {
    return response.json({message: 'Products from v2 API'})
}

module.exports = {
    productControllerV1,
    productControllerV2
}