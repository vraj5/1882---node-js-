const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
    {
        book_name : {
            type: String,
            trim: true
        },
        book_page : {
            type: Number,
            trim: true
        },
        book_author : {
            type: String,
            trim: true
        },
        book_category : {
            type : String,
            trim : true
        },
        book_price : {
            type : Number,
            trim : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const book = mongoose.model("book",bookSchema);
module.exports = book