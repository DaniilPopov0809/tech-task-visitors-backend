const fs = require("fs/promises");
const path = require("path");
const tokenPath = path.join(__dirname, "../", "../", "db", "token.json");

const logout = async () => {
    await fs.writeFile(tokenPath, JSON.stringify({ token: null }, null, 2));
};

module.exports = logout;