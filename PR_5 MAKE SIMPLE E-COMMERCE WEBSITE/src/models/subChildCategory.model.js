const mongoose = require("mongoose");

const subChildCategorySchema = new mongoose.Schema(
    {
        sub_child_category_name:{
            type:String,
            trim:true
        },
        sub_child_category_disc:{
            type:String,
            trim:true
        },
        sub_category:{
            type:mongoose.Types.ObjectId,
            ref:"subCategory"
        },
        category:{
            type:mongoose.Types.ObjectId,
            ref:"category"
        },
        is_active:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const subChildCategory = mongoose.model("subChildCategory" , subChildCategorySchema);
module.exports= subChildCategory;