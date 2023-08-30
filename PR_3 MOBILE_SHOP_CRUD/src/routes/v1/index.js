const express = require("express");
const categoryRoute = require("./category.route");
const productRoute = require("./product.route");

const router = express.Router();

router.use("/category",categoryRoute);
router.use("/product",productRoute);

module.exports = router;