const { ctrlWrapper } = require("../../utils");
const login = require("./login");
const logout = require("./logout");

module.exports = {
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
};
