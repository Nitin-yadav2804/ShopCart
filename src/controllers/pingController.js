function pingController(request, response) {
    return response.json({message: 'Pong'})
}

module.exports = {
    pingController
}