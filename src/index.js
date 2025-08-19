const express = require('express');

const { PORT } = require('./config/serverConfig.js');

const app = express();



app.listen(PORT, () => {
    console.log(`Server for ShopCart is UP on PORT ${PORT}`);
})