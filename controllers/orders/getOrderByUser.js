const { OrderModel } = require("../../schemas");

async function getOrderByUser(req, res) {
  const { email, phone } = req.body;
  const searchResult = await OrderModel.find({
    email,
    phone,
  });
  return res.status(200).json(searchResult);
}

module.exports = getOrderByUser;
