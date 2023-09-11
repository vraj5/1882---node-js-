const Joi = require("joi");

// create cart 
const createCart = {
    body : Joi.object().keys({
        quantity : Joi.number().integer().required(),
        order_status : Joi.array().required()
    })
};

module.exports = {
    createCart
}