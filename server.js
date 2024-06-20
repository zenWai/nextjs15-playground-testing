const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const currentDate = new Date().toISOString();
  res.send({ date: currentDate });
});

app.listen(2999, () => {
  console.log("running");
});
