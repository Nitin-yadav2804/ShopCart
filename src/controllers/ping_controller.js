function pingControllerV1(request, response) {
    return response.json({message: 'Pong from v1 API'})
}

function pingControllerV2(request, response) {
    return response.json({message: 'Pong from v2 API'})
}

module.exports = {
    pingControllerV1,
    pingControllerV2
}