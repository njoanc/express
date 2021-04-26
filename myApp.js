var express = require("express");
var app = express();
require("dotenv").config();
// app.get("/", function (req, res) {
//   res.send("Hello Express");
// });
app.use(express.static(__dirname + "/public"));
// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({ message: "Hello World" });
  } else {
    res.json({ message: "Hello World" });
  }
});

module.exports = app;
