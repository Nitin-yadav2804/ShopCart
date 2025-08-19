const express = require('express');

const { PORT } = require('./config/serverConfig.js');
const pingRoutes = require('./routes/pingRoutes.js')
const app = express();

app.use('/api/v1/ping', pingRoutes)

app.listen(PORT, () => {
    console.log(`Server for ShopCart is UP on PORT ${PORT}`);
})