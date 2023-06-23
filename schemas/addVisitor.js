const Joi = require("joi");

const dateRegExp = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

const addVisitorSchema = Joi.object({
  name: Joi.string().not("").max(10).required(),
  lastname: Joi.string().not("").max(10).required(),
  date: Joi.string().pattern(dateRegExp).required(),
});

module.exports = addVisitorSchema;
