const mongoose = require("mongoose");

const product = mongoose.Schema(
  {
    title: { type: String, default: null },
    imgUrl: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2012/04/26/13/06/shopping-card-42436_1280.png",
    },
    description: { type: String, default: null },
    price: { type: Number, default: 0 },
    store: { type: String, default: null },
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("products", product);

module.exports = ProductModel;
