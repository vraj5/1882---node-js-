const express = require("express");
const {subChildCategoryService} = require("../../services");
const {subChildCategoryController} = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create sub child category 
router.post(
    "/create-sub-child-category",
    validate(subChildCategoryService.createSubChildCategory),
    subChildCategoryController.createSubChildCategory
);

// get sub child category list 
router.get(
    "/subChildCategory-list",
    subChildCategoryController.getSubChildCategoryList   
);

// delete sub child category 
router.delete(
    "/delete-sub-Child-category/:subChildCategoryId",
    subChildCategoryController.deleteSubChildCategory
);

// update sub child category 
router.put(
    "/update-sub-child-category/:subChildCategoryId",
    subChildCategoryController.updateSubChildcategory
);

module.exports = router ;

