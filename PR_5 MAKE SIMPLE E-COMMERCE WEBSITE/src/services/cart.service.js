const {cart} = require("../models");

// create cart
const createCart = async(reqBody) =>{
    return cart.create(reqBody);
};

// get cart list
const getCartList = async(req,res) =>{
    return cart.find({$or : [{is_active:true}]});
};

// delete cart
const deleteCart = async(cartId) =>{
    return cart.findByIdAndDelete(cartId);
};

// get cart details by id
const getCartById = async(cartId) =>{
    return cart.findById(cartId);
};

// update cart details
const updateCart = async(cartId , updateBody) =>{
    return cart.findByIdAndUpdate(cartId , {$set : updateBody})
}

module.exports = {
    createCart,
    getCartList,
    deleteCart,
    getCartById,
    updateCart
}