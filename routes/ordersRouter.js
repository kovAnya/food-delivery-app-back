const express = require("express");
const { addOrder, getOrderByUser } = require("../controllers");
const asyncHandler = require("express-async-handler");
const validation = require("../middlewares/validation");
const { orderSchema } = require("../schemas");

const router = express.Router();

router.post("/", validation(orderSchema), asyncHandler(addOrder));

router.get("/user", asyncHandler(getOrderByUser));

module.exports = router;
