const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_name:{
        type:String,
        trim:true
    },
    product_disc:{
        type: String,
        trim:true
    },
    product_price:{
        type:Number,
        trim:true
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:"category"
    },
    sub_category:{
        type:mongoose.Types.ObjectId,
        ref:"subCategory"
    },
    sub_child_category:{
        type:mongoose.Types.ObjectId,
        ref:"subChildCategory"
    },
    is_active:{
        type:Boolean,
        default:true
    }
},
{
    timestamps : true,
    versionKey:false
}
)

const product = mongoose.model("product" , productSchema);
module.exports = product;
