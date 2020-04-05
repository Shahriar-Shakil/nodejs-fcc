const express = require("express");
const path = require("path");

const app = express();
app.use("/public", express.static(path.join(__dirname, "static")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});
app.listen(3000);

//working with expess get request
// app.get("/example", (req, res) => {
//   res.send("this is example page");
// });
// app.get("/example/:name/:age", (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
//   res.send(req.params.name + " : " + req.params.age);
// });
//static file with express
