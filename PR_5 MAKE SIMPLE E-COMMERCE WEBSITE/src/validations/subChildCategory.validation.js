const Joi = require("joi");

// create sub child  category 
const createSubChildCategory = {
    body : Joi.object().keys({
        sub_child_category_name : Joi.string().trim().required(),
        sub_child_category_disc : Joi.string().trim().required(),
    })
};

module.exports = {
    createSubChildCategory
}