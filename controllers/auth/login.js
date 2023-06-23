const jwt = require("jsonwebtoken");

const { authModel } = require("../../models");
const { HttpError } = require("../../utils");

require("dotenv").config();
const { ADMIN_USERNAME, ADMIN_PASSWORD, SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { username, password } = req.body;

  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    throw HttpError(401, "Unauthorized");
  }

  const token = jwt.sign({ username }, SECRET_KEY, {
    expiresIn: "2h",
  });
  await authModel.login(token);

  res.json({ username, token });
};

module.exports = login;
