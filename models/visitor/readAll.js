const fs = require("fs/promises");
const path = require("path");
const visitorsPath = path.join(__dirname, "../", "../", "db", "visitors.json");

const readAll = async () => {
  const result = await fs.readFile(visitorsPath);
  return JSON.parse(result);
};

module.exports = readAll;