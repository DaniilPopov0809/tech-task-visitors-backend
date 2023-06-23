require("dotenv").config();
const jwt = require("jsonwebtoken");
const { HttpError } = require("../utils");
const fs = require("fs/promises");
const path = require("path");
const tokenPath = path.join(__dirname, "../", "db", "token.json");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (!token || bearer !== "Bearer") {
    next(HttpError(401, "Unauthorized"));
  }

  try {
    const { username } = jwt.verify(token, SECRET_KEY);
    const data = await fs.readFile(tokenPath, "utf8");
    const dbToken = JSON.parse(data);

    if (!username  || dbToken.token !== token) {
      next(HttpError(401, "Unauthorized"));
    }
    next();
  } catch {
    next(HttpError(401, "Unauthorized"));
  }
};

module.exports = authenticate;
