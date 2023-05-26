const Joi = require("joi");

const productSchema = Joi.object({
  title: Joi.string().min(3).required(),
  imgUrl: Joi.string(),
  description: Joi.string(),
  price: Joi.number(),
  store: Joi.string().required(),
});

const orderSchema = Joi.object({
  name: Joi.string().pattern(/^[\p{L}\p{M}_-]+$/u),
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
  productSchema,
  orderSchema,
};
