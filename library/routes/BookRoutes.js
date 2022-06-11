const express = require('express');
const router = express.Router();


//Controllers
bookController = require('../controller/book');


//Routes

router.post('/add-book', bookController.get_add_book);
router.get('/get-all-books', bookController.get_all_books);
router.get('/get-book', bookController.get_book);
router.delete('/delete-book', bookController.delete_book);


module.exports = router;



