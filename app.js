const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./src/router/api");
const mongoose = require("mongoose");

let URL =
  "mongodb+srv://<username>:<password>@cluster0.7dgocwt.mongodb.net/sales-analytics?retryWrites=true&w=majority";
let option = { user: "rasel11", pass: "rasel11", autoIndex: true };

mongoose
  .connect(URL, option)
  .then((res) => {
    console.log("Database Connect");
  })
  .catch((err) => {
    console.log(err);
  });
//Security Middleware implement
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limiter: "50mb" }));
app.use(express.json());
app.use(router);
app.use("*", (req, res) => {
  res.status(404).json({ status: "Page not found,Please check Url" });
});

module.exports = app;
