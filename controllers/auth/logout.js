const { authModel } = require("../../models");

const logout = async (req, res) => {
    await authModel.logout();

  res.json({
    message: "Logout success",
  });
};

module.exports = logout;
