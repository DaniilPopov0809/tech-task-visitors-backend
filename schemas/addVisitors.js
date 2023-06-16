const Joi = require("joi");

const addVisitorSchema = Joi.object({
  name: Joi.string().not('').required(),
  lastname: Joi.string().not('').required(),
});

module.exports = addVisitorSchema;
