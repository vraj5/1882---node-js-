const {category} = require("../models");

// Create category
const createCategory = async(reqBody) =>{
    return category.create(reqBody);
};

// get category list
const getCategoryList = async(req,res) =>{
    return category.find({$or : [{is_active:true}]});
};

// delete category
const deleteCategory = async(categoryId) =>{
    return category.findByIdAndDelete(categoryId);
};

// Get category details by id
const getCategoryById = async(categoryId)=>{
    return category.findById(categoryId)
}

// update category details 
const updateCategory = async(categoryId , updateBody)=>{
    return category.findByIdAndUpdate(categoryId , {$set : updateBody})
}

module.exports={
    createCategory,
    getCategoryList,
    deleteCategory,
    getCategoryById,
    updateCategory
}