mongoose = require("mongoose");
Schema = mongoose.Schema;

const bookSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        required: false,
    }

});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;


