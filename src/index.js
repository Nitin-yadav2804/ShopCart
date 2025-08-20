const express = require("express");
const bodyParser = require('body-parser');
const responseTime = require('response-time');

const { PORT } = require('./config/server_config.js')

const ApiRouter = require("./routes/api_rouer.js");

const db = require('./config/db_config.js');
const Category = require("./models/category.js");


const app = express();

// app.use(responseTime(function f(req, res, time){
//     console.log("Time elasped = ", time);
//     res.setHeader("X-Response-Time", time);
// }));
app.use(responseTime()); // This only provides time in header by default

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api", ApiRouter);

app.listen(PORT, async () => {
  console.log(`Server for ShopCart is UP on PORT ${PORT}`);
  await db.sync();
  console.log("DB Connected");

  // const res = await Category.create({
  //   name: 'Electronics',
  //   description: 'Category for electronic products'
  // });
  // console.log(res);

});
