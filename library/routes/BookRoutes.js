const express = require('express');
const router = express.Router();
const auth = require("./middleware/auth");


//Controllers
const bookController = require('../controller/book');


//Routes

router.post('/add-book', auth, bookController.get_add_book);
router.get('/get-all-books', bookController.get_all_books);
router.get('/get-book', bookController.get_book);
router.delete('/delete-book', auth, bookController.delete_book);

module.exports = router;



