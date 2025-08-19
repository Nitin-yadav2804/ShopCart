const express = require("express");

const { PORT } = require("./config/serverConfig.js");
const ApiRouter = require("./routes/apiRouer.js");
const app = express();

app.use("/api", ApiRouter);

app.listen(PORT, () => {
  console.log(`Server for ShopCart is UP on PORT ${PORT}`);
});
