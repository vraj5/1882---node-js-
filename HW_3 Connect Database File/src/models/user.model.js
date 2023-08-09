const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
        },
        last_name: {
            type: STring,
            trim: true,
        },
        email: {
            type: String,
            trim: true
        },
        Password: {
            type: String,
        },
        mobile_number: {
            type: number,
            trim: true
        },
        birthday_date: {
            type: Date,
            defult: Date.now
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },{
        timestamps: true,
        versionKey: false
    }
);

const user = mongoose.model("user", userSchema);
module.exports = user