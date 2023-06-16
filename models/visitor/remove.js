const fs = require("fs/promises");
const path = require("path");
const visitorsPath = path.join(__dirname, "../", "../", "db", "visitors.json");
const readAll = require("./readAll");

const remove = async (visitorId) => {
  const visitors = await readAll();
  const index = visitors.findIndex((el) => el.id === visitorId);
  if (index === -1) {
    return null;
  }
  const [result] = visitors.splice(index, 1);
  await fs.writeFile(visitorsPath, JSON.stringify(visitors, null, 2));
  return result;
};

module.exports = remove;