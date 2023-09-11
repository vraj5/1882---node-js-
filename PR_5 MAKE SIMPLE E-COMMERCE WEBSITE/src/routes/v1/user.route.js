const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create user info */
router.post(
  "/create-user",
  validate(userValidation.createUser),
  userController.createUser
);

/** Get user list */
router.get(
  "/user-list",
  userController.getUserList
);

/** Delete user */
router.delete(
  "/delete-user/:userId",
  userController.deleteUser
);

/** update user */
router.put(
  "/update-user/:userId",
  userController.updateUser
)


module.exports = router;