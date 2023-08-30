const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
        },
        product_desc: {
            type: String,
            trim: true,
        },
        product_category: {
            type: String,
            trim: true,
        },
        product_price: {
            type: Number,
            trim: true,
        },
        product_stock: {
            type: Number,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },{
        timestamps: true,
        versionkey: false
    }
);

const product = mongoose.model("product", productSchema);
module.exports = product;