"use strict";

var express = require("express");

var app = express();

app.use(express.static('.'));


var insults = ["You're not that fun",
                "Nice presentation...",
                "What a silly example",
                "May as well just stop talking",
                "Hopefully no one is making fun of you",
                "Nice \"Modern\" webapp...:P"];

app.get("/", function(req, res) {
  res.send("Hello word");
});

app.get("/insults", function(req, res) {

  var index = Math.floor(Math.random() * insults.length);
  res.status(200).send(insults[index]);
});

app.listen(3000);
console.log("Server is running");
