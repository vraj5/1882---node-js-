const Joi = require("joi");

// create sub category 
const createSubCategory = {
    body : Joi.object().keys({
        sub_category_name : Joi.string().trim().required(),
        sub_category_disc : Joi.string().trim().required(),
    })
};

module.exports = {
    createSubCategory
}