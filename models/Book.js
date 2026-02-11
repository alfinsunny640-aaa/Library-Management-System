const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        author: {
            type: String,
            required: true,
            unique: true
        },
        isbn: {
            type: String,
            unique: true
        },
        publishedYear: Number,
        available: {
            type: Boolean,
            default: true
            
        }

    },
    { timestamps: true }

);

module.exports = mongoose.model("Book", bookSchema);