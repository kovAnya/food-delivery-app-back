const express = require("express");
const { addOrder, getOrderByUser } = require("../../controllers");
const asyncHandler = require("express-async-handler");

const router = express.Router();

router.post("/", asyncHandler(addOrder));

router.get("/user", asyncHandler(getOrderByUser));

module.exports = router;
