const mongoose = require("mongoose");

const order = Schema(
  {
    name: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      minlength: 6,
      maxlength: 20,
    },
    address: { type: String, required: [true, "Address is required"] },
    items: [
      {
        id: String,
        title: String,
        imgUrl: String,
        price: Number,
        quantity: Number,
        store: String,
      },
    ],
    totalCost: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const OrderModel = model("orders", order);

module.exports = {
  OrderModel,
};
