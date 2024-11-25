//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

let bookModel = mongoose.Schema({
    Name: String,
    Author: Number,
    Published: Number,
    Description: String,
    Price: Number
},
{
    collection:"Bio_books"
});
module.exports =mongoose.model('Book',bookModel);
