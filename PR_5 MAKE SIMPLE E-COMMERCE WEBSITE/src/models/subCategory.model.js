const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema(
    {
        sub_category_name:{
            type:String,
            trim:true
        },
        sub_category_disc:{
            type:String,
            trime:true
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

const subCategory = mongoose.model("subCategory" , subCategorySchema);
module.exports = subCategory;