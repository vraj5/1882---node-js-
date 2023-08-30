const Joi = require("joi");
const joi = require("joi");

// Create Category
const createCategory = {
    body: Joi.object().keys({
        category_name: Joi.string().required().trim(),
        category_desc: Joi.string().required().trim()
    })
}

// Get category list
const getCategoryList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get Category by ID
const getCategory = {
    query: Joi.object().keys({
        categoryId: Joi.string().required().trim(),
    }),
};

// Update Category
const updateCategory = {
    params: Joi.object().keys({
        categoryId: Joi.string().required().trim(),
    }),
    body: Joi.object().keys({
        category_name: Joi.string().trim(),
        category_type: Joi.string().trim(),
        category_desc: Joi.string().trim()
    })
}

module.exports = {
    createCategory,
    getCategoryList,
    getCategory,
    updateCategory
};