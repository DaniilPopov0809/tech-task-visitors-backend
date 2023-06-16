const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const visitorsRouter = require("./routes/api/visitors");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/visitors", visitorsRouter);

module.exports = app;
