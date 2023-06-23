const { ctrlWrapper } = require("../../utils");
const login = require("./login");
const logout = require("./logout");
const current = require("./current");

module.exports = {
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  current: ctrlWrapper(current),
};
