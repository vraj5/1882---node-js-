const express = require("express");
const {orderValidation} = require("../../validations");
const {orderController} = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create order info */
router.post(
    "/create-order",
    validate(orderValidation.createOrder),
    orderController.createOrder
)

/** Get order list */
router.get(
    "/order-list",
    orderController.getOrderList
  );
  
  /** Delete order */
  router.delete(
    "/delete-order/:orderId",
    orderController.deleteOrder
  );
  
  /** update order */
  router.put(
    "/update-order/:orderId",
    orderController.updateOrder
  )

  module.exports = router;