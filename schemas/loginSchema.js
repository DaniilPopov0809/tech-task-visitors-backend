const Joi = require("joi");

const loginSchema = Joi.object({
  login: Joi.string().not("").max(10).required(),
  password: Joi.string().not("").min(8).required(),
});

module.exports = loginSchema;