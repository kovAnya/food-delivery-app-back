const Joi = require("joi");

const orderSchema = Joi.object({
  name: Joi.string()
    .trim()
    .pattern(/^[\p{L}_ -]+$/u),
  email: Joi.string()
    .trim()
    .email({ minDomainSegments: 2 })
    .pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/)
    .min(5),
  phone: Joi.string().pattern(/^\+380\d{9}$/),
  address: Joi.string(),
  items: Joi.array(),
  totalCost: Joi.number(),
});

module.exports = {
  orderSchema,
};
