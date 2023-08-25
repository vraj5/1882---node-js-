const { bookService } = require("../services");

/** Create User */
const createBook = async (req,res)=>{
    try {
        const reqBody = req.body;

        // const bookExists = await bookService.getBookList(reqBody._id);
        // if(bookExists){
        //     throw new Error("Book Already Created!");
        // }

        const book = await bookService.createBook(reqBody);
        if(!book){
            throw new Error("Something went wrong, Please try again later!")
        }

        req.status(200).json({
            success: true,
            message: "Book Created Successfully!",
            data: {book},
        });

    } catch (error) {
        res.status(400).json({success:false, message:error.message});
    }
}

/** Get Book List */
const getBookList = async (req,res)=>{
    try {
        const { search, ...options } = req.query;
        let filter = {};
        if(search){
            filter.$or = [
                {book_name: { $regax: search, $options:  "1"}},
            ]
        }
        const getList = await bookService.getBookList(filter,options);

        res.status(200).json({
            success: true,
            message: "Get Book List Succesdully!",
            data: getList
        })

        if(search){}
    } catch (error) {
        res.status(400).json({success:false, message:error.message});
    }
}

/** Delete Book */
const deleteBook = async (req,res)=>{
    try {
        const bookId = req.params.bookId;
        const bookExists = await bookService.getBookById(bookId);
        if(!bookExists){
            throw new Error("Book Not Found!");
        }

        await bookService.deleteBook(bookId);

        res.status(200).json({
            status: true,
            message: " Book Deleted Successfully"
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
}

module.exports = {
    createBook,
    getBookList,
    deleteBook
}