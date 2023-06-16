const Joi = require("joi");

const patchVisitors = Joi.object({
  name: Joi.string().not("").required(),
  lastname: Joi.string().not("").required(),
});

module.exports = patchVisitors;
