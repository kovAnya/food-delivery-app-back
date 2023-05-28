const { OrderModel } = require("../../schemas");

async function getOrderByUser(req, res) {
  const { email, phone } = req.query;
  const searchResult = await OrderModel.find({
    email,
    phone: `+${phone}`,
  });
  return res.status(200).json(searchResult);
}

module.exports = getOrderByUser;
