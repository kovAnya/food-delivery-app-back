const mongoose = require("mongoose");

const order = mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
    },
    address: { type: String, required: [true, "Address is required"] },
    items: [
      {
        id: String,
        title: String,
        imgUrl: String,
        description: String,
        price: Number,
        quantity: Number,
        store: String,
      },
    ],
    totalCost: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const OrderModel = mongoose.model("orders", order);

module.exports = OrderModel;
