const express = require("express");
const bookRoute = require("./book.route");

const router = express.Router();

router.use("/book", bookRoute);

module.exports = router;