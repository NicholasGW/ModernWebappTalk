"use strict";

var express = require("express");

var app = express();

app.use(express.static('./'));

app.get("/", function(req, res) {
  res.send("Hello word");
});

app.get("/value", function(req, res) {

  res.send(200, (Math.floor(Math.random() * 10) + 1));
});

app.listen(3000);
console.log("Server is running");
