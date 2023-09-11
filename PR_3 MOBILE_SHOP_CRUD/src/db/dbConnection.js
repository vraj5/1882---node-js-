const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
    mongoose
        .connect(config.mongoose.url, config.mongoose.options)
        .then((data) => {
            console.log("Database Connection Successfully !");
        })
        .catch((error) => {
            console.log("Database connection error !", error);
        })
};

module.exports = { connectDB };