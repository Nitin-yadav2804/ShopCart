const express = require("express");

const { PORT } = require("./config/server_config.js");
const ApiRouter = require("./routes/api_rouer.js");
const app = express();

app.use("/api", ApiRouter);

app.listen(PORT, () => {
  console.log(`Server for ShopCart is UP on PORT ${PORT}`);
});
