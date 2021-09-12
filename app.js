const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const bodyParser = require("body-parser");
const app = express();
const api = require("./api");
app.use(bodyParser.json({ limit: "10gb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10gb" }));
app.use("/api", api);
const start = async () => {
  const port = process.env.PORT || 5000;
  await mongoose.connect(config.get("mongo"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen(port, () => console.log(`http://localhost:${port}`));
};
start();
