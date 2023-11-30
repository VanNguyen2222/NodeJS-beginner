const express = require("express");
const path = require("path");
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");

const app = express();
const port = process.env.PORT;

configViewEngine(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/web", webRouter);
