const Joi = require("joi");

/** create category */
const createCategory = {
    body : Joi.object().keys({
        category_name: Joi.string().required().trim(),
        category_disc: Joi.string().required().trim()
    })
};

module.exports = {
    createCategory
}
