const { ctrlWrapper } = require("../../utils");
const readAll = require("./readAll");
const readOne = require("./readOne");
const remove = require("./remove");
const create = require("./create");
const update = require("./update");

module.exports = {
  readAll: ctrlWrapper(readAll),
  readOne: ctrlWrapper(readOne),
  remove: ctrlWrapper(remove),
  create: ctrlWrapper(create),
  update: ctrlWrapper(update),
};
