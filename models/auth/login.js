const fs = require("fs/promises");
const path = require("path");
const tokenPath = path.join(__dirname, "../", "../", "db", "token.json");

const login = async (token) => {
  await fs.writeFile(tokenPath, JSON.stringify({ token }, null, 2));
};

module.exports = login;
