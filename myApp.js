var express = require("express");
var app = express();

// app.get("/", function (req, res) {
//   res.send("Hello Express");
// });
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
