const { ProductModel } = require("../../schemas");

async function getProductsByStore(req, res) {
  const query = req.query.store;

  const result = await ProductModel.find({ store: query });

  return res.status(200).json(result);
}

module.exports = getProductsByStore;
