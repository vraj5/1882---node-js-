const express = require("express");
const { categoryValidation } = require("../../validations")
const { categoryController } = require("../../controllers")

const router = express.Router();

/** Create Category */
router.post(
    "/create-category",
    categoryValidation.createCategory,
    categoryController.createCategory
)

/** get Category list */
router.get(
    "/list",
    categoryController.getCategoryDetails
);

// get single category
router.get(
    "/get-category/:categoryId",
    categoryController.getCategory
)

/** Delete Category */
router.delete(
    "/delete-category",
    categoryController.deleteCategory
)

/** Update Category */
router.put(
    "/update-category/:categoryId",
    categoryController.updateCategory
)

module.exports = router;