const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        order_name:{
            type:String,
            trim:true
        },
        quantity:{
            type:Number,
            trim:true
        },
        product:{
            type:mongoose.Types.ObjectId,
            ref:"product"
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user"
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

const order = mongoose.model("order" , orderSchema);
module.exports = order;