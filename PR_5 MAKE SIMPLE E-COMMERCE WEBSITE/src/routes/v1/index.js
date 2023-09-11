const express = require("express");

const userRoute = require("./user.route.js");
const categoryRoute = require("./category.route.js");
const subCategoryRoute = require("./subCategory.route.js");
const subChildCategoryRoute = require("./subChildCategory.route.js");
const productRoute = require("./product.route.js");
const orderRoute = require("./order.route.js");
const cartRoute = require("./cart.route.js");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/subCategory", subCategoryRoute);
router.use("/subChildCcategory", subChildCategoryRoute);
router.use("/product", productRoute);
router.use("/order", orderRoute);
router.use("/cart", cartRoute);

module.exports = router;