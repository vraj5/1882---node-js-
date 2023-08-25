const { book } = require("../models");

/** Create Book */
const createBook = async(reqBody) => {
    return book.create(reqBody);
};

/** Get Book List */
const getBookList = async (filter,option)=>{
    const skip = (Number(options.page || 1)-1 ) * Number(options.limit || 10);

    return book.find(filter).skip(skip).limit(option.limit).select("-password");
}

/** Delete Book */
const deleteBook = async(bookId) =>{
    return book.findByIdAndDelete(bookId);
};

module.exports = {
    createBook,
    getBookList,
    deleteBook
}