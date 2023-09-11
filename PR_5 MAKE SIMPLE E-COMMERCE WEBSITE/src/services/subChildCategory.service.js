const { subChildCategory } = require("../models");

// create sub child category 
const createSubChildCategory = async (reqBody) => {
    return subChildCategory.create(reqBody);
};

// get sub child category list 
const getSubChildCategoryList = async (req, res) => {
    return subChildCategory.find().populate("category").populate("sub_category");
};

// delete sub category 
const deleteSubChildCategory = async (subChildCategoryId) => {
    return subChildCategory.findByIdAndDelete(subChildCategoryId)
};

// get sub child category details by id 
const getSubChildCategoryById = async (subChildCategoryId) => {
    return subChildCategory.findById(subChildCategoryId).populate("category").populate("sub_category");
};

// update sub child category 
const updateSubChildcategory = async (subChildCategoryId, updateBody) => {
    return subChildCategory.findByIdAndUpdate(subChildCategoryId, { $set: updateBody });
};

module.exports = {
    createSubChildCategory,
    getSubChildCategoryList,
    deleteSubChildCategory,
    getSubChildCategoryById,
    updateSubChildcategory
}
