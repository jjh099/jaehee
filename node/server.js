const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("hello node hi!!!");
});

app.listen(3000);
