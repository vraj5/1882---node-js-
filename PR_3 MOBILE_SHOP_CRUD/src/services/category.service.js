const { category } = require("../models");

// Create Category
// @param {object} reqBody
// @returns {promise<user>}

const createCategory = async (reqBody) => {
    return category.create(reqBody);
};

// Get Category List
const getCategoryList = async(filter,options)=>{
    const skip = (Number(options.page || 1)* Number(options.page || 10));

    return category.find(filter).skip(skip).limit(option.limit).select("-password")
};

// get Category By Id
const getCategoryById = async (categoryId)=>{
    return category.findById(categoryId)
}

// Update Category
const updateCategory = async (categoryId , updateBody) => {
    return category.findByIdAndUpdate(categoryId, {$set: updateBody})
}

// Delete Category
const deleteCategory = async(categoryId) => {
    return category.findByIdAndDelete(categoryId);
}

module.exports = {
    createCategory,
    getCategoryList,
    getCategoryById,
    updateCategory,
    deleteCategory
}