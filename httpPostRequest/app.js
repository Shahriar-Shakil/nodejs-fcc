const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.use("/public", express.static(path.join(__dirname, "static")));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.post("/", (req, res) => {
  console.log(req.body);
  // database work here
  res.json({success: true});
  //res.send("successfully posted data");
});
app.listen(3000);
