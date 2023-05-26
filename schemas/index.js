const ProductModel = require("./product");
const OrderModel = require("./order");
const { productSchema, orderSchema } = require("./joiValidation");

module.exports = { productSchema, orderSchema, ProductModel, OrderModel };
