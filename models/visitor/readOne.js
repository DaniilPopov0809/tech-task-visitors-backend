const readAll = require("./readAll");

const readOne = async (visitorId) => {
  const visitors = await readAll();
  const result = visitors.find((el) => el.id === visitorId);
  return result || null;
};

module.exports = readOne;