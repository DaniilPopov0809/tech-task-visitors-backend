const { HttpError } = require("../../utils");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const express = require("express");
const router = express.Router();

const fs = require("fs/promises");
const path = require("path");

const { authenticate } = require("../../middlewares");

const tokenPath = path.join(__dirname, "../", "../", "db", "token.json");

const { ADMIN_USERNAME, ADMIN_PASSWORD, SECRET_KEY } = process.env;

router.post("/login", async (req, res, next) => {
  const { login, password } = req.body;

  if (login !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return next(HttpError(401, "Unauthorized")); //!Throw??????????
  }

  const token = jwt.sign({ login }, SECRET_KEY, {
    expiresIn: "2h",
  });
  try {
    await fs.writeFile(tokenPath, JSON.stringify({ token }, null, 2));
  } catch {
    return next(HttpError(500, "Server Error"));
  }

  res.json({ token });
});

router.post("/logout", authenticate, async (req, res) => {
  try {
    await fs.writeFile(tokenPath, JSON.stringify({ token: null }, null, 2));
  } catch {
    return next(HttpError(500, "Server Error"));
  }
  res.status.json({
    message: "Logout success",
  });
});

module.exports = router;

//TODO SHEMA LOGIN refactor code!!!!!!
