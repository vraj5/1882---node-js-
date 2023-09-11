const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        quantity: {
            type: Number,
            trim: true
        },
        order_status: {
            type: [{ approverd: Boolean, rejected: Boolean, inprocess: Boolean, delivered: Boolean }]
        },
        order_total: {
            type : Number,
            trim: true
        },
        order:{
            type: mongoose.Types.ObjectId,
            ref:"order"
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const cart = mongoose.model("cart" , cartSchema);
module.exports = cart;