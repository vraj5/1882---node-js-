const Joi = require("joi");

/** create product*/
const createProduct ={
    body : Joi.object().keys({
        product_name : Joi.string().required().trim(),
        product_category: Joi.string().required().trim(),
        product_disc: Joi.string().required().trim(),
        product_price: Joi.number().required().integer(),
    })
}

module.exports = {
    createProduct
}