const {subCategory} = require("../models");

// create sub category 
const createSubCategory = async(reqBody) =>{
    return subCategory.create(reqBody);
};

// get sub_category list 
const getSubCategoryList = async (req,res) =>{
    return subCategory.find().populate("category");
};

// delete sub category 
const deleteSubCategory = async(subCategoryId) =>{
    return subCategory.findByIdAndDelete(subCategoryId) 
};

// get sub category details by id 
const getSubCategoryById = async(subCategoryId) =>{
    return subCategory.findById(subCategoryId).populate("category");
};

// update sub category 
const updateSubcategory = async (subCategoryId , updateBody) =>{
    return subCategory.findByIdAndUpdate(subCategoryId , {$set : updateBody});
};

module.exports = {
    createSubCategory,
    getSubCategoryList,
    deleteSubCategory,
    getSubCategoryById,
    updateSubcategory
}
