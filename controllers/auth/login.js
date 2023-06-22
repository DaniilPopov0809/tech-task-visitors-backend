const jwt = require("jsonwebtoken");

const { authModel } = require("../../models");
const { HttpError } = require("../../utils");

require("dotenv").config();
const { ADMIN_USERNAME, ADMIN_PASSWORD, SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { login, password } = req.body;

  if (login !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    throw HttpError(401, "Unauthorized");
  }

  const token = jwt.sign({ login }, SECRET_KEY, {
    expiresIn: "2h",
  });
  await authModel.login(token);

  res.json({ token });
};

module.exports = login;
