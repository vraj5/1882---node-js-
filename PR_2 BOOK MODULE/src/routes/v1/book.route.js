const express = require("express");
const { bookValidation } = require("../../validations");
    const { bookController } = require("../../controllers")

const router = express.Router();

/** Create Book */
router.post(
    "/create-book",
    // validate(bookValidation.createBook)
    bookController.createBook
);

/** Get Book List */
router.get(
    "/get-book",
    // validate(bookValidation.getBookList)
    bookController.getBookList
)

/** Delete Book */
router.delete(
    "/delete-book/:bookId",
    // validate(bookValidation.getBookList)
    bookController.deleteBook
)

module.exports = router;