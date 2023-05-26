const express = require("express");
const { getProductsByStore } = require("../../controllers");
const asyncHandler = require("express-async-handler");

const router = express.Router();

router.get("/store", asyncHandler(getProductsByStore));

module.exports = router;
