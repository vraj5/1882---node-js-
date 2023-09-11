const { product } = require("../models");

// Create product
const createProduct = async (reqBody) => {
    return product.create(reqBody);
};

// get product list
const getProductList = async (req, res) => {
    // return product.find({$or : [{is_active : true}]});
    return product.find().populate("category").populate("sub_category").populate("sub_child_category");
};

// delete product
const deleteProduct = async (productId) => {
    return product.findByIdAndDelete(productId);
};

// Get product details by id
const getProductById = async (productId) => {
    return product.findById(productId).populate("sub_category").populate("sub_child_category");
}

// update product details 
const updateProduct = async (productId, updateBody) => {
    return product.findByIdAndUpdate(productId, { $set: updateBody });
}

module.exports = {
    createProduct,
    getProductList,
    deleteProduct,
    getProductById,
    updateProduct
}