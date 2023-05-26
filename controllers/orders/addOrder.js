const { OrderModel } = require("../../schemas");

async function addOrder(req, res) {
  const createOrder = await OrderModel.create({ ...req.body });

  return res.status(201).json(createOrder);
}

module.exports = addOrder;
