const express = require("express");
const { cartValidation } = require("../../validations");
const { cartController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create cart info */
router.post(
  "/create-cart",
  validate(cartValidation.createCart),
  cartController.createCart
);

/** Get cart list */
router.get(
  "/cart-list",
  cartController.getCartList
);

/** Delete cart */
router.delete(
  "/delete-cart/:cartId",
  cartController.deleteCart
);

/** update cart */
router.put(
  "/update-cart/:cartId",
  cartController.updateCart
)

module.exports = router;