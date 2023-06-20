const Joi = require("joi");

const patchVisitors = Joi.object({
  name: Joi.string().not("").max(10).required(),
  lastName: Joi.string().not("").max(10).required(),
});

module.exports = patchVisitors;
