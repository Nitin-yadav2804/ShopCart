const express = require("express");
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const mysql = require('mysql2');

const { PORT, DB_HOST, DB_NAME, DB_PASS, DB_USER } = require("./config/server_config.js");


const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
})


const ApiRouter = require("./routes/api_rouer.js");

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

app.listen(PORT, () => {
  console.log(`Server for ShopCart is UP on PORT ${PORT}`);

  db.connect((err) => {
    if(err) {
      console.log("DB did not connect");
      console.log(err);
      throw err;
    }
    console.log("DB Connected");
    db.query('Select * from posts', (err, result) => {
      if(err) {
        console.log(err);
      }
      console.log(result);
    })
  });
});
