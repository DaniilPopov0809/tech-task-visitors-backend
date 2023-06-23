const Joi = require("joi");

const patchVisitors = Joi.object({
  name: Joi.string().not("").max(10).required(),
  lastname: Joi.string().not("").max(10).required(),
});

module.exports = patchVisitors;
