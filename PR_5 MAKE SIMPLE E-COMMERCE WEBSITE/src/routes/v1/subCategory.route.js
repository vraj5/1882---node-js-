const express = require("express");
const {subCategoryService} = require("../../services");
const {subCategoryController} = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create sub category 
router.post(
    "/create-sub-category",
    validate(subCategoryService.createSubCategory),
    subCategoryController.createSubCategory
);

// get sub category list 
router.get(
    "/suCategory-list",
    subCategoryController.getSubCategoryList   
);

// delete sub category 
router.delete(
    "/delete-sub-category/:subCategoryId",
    subCategoryController.deleteSubCategory
);

// update sub category 
router.put(
    "/update-sub-category/:subCategoryId",
    subCategoryController.updateSubcategory
);

module.exports = router ;

