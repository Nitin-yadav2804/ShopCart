const express = require('express');

const v1Router = require('./v1/index.js')
const v2Router = require('./v2/index.js')

const apiRouter = express.Router();

apiRouter.use('/v1', v1Router)
apiRouter.use('/v2', v2Router)

module.exports = apiRouter;

