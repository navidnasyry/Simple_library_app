
const { ALL } = require('dns');
require("dotenv").config();
let express = require('express');
const router = require('express').Router();

//read from env file
const PORT = process.env.PORT;

let app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));
app.use(router);


// connect to db
require("./config/database").connect();


// server listening 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  

// apis
app.use('/lib',require('./routes/BookRoutes'));








// router.post('/add-book', async function (req, res) {
//     console.log("post request to /add-book");
//     let last_index = null;
//     let last_book = await Book.find().sort({_id:-1}).limit(1);
//     if (!last_book.length)
//         last_index = 0;
//     else
//         last_index = last_book[0].id;

//     const new_book =new Book({
//         id :  last_index + 1,
//         title : req.body.name,
//         author : req.body.author,
//         publisher : req.body.publisher,
//         year : req.body.year,
//         rate : req.body.rate,
//     });
//     //ALL_BOOKS.push(new_book);
//     //Number_Of_All_Books += 1;
//     new_book.save()
//         .then((result) => {
//             console.log("new Book Added successfully. book id : " + 0);
//             res.send(result);
//         })
//         .catch((err) =>{
//             console.log(err);
//         })

//   });

  
// router.get('/get-all-books', function(req, res){
//     console.log("get request to /get-all-books");
//     Book.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             res.send(err);
//         })
    
// });

// router.get('/get-book', function(req, res){
//     console.log("get request to /get-book");
//     Book.find({id:req.query.id})
//         .then((result) =>{
//             if(result.length)
//                 res.send(result);
//             else{
//                 res.status(404);
//                 res.send("Book Not Found :(");
//             }
//         })
//         .catch((err) => {
//             res.send("Book Not Found :)");
//         })

// });



// router.delete('/delete-book', function(req, res){
//     console.log("delete request to /delete-book");
//     all_books = Book.deleteOne({id:req.query.id})
//         .then((result) => {
//             if(!result.deletedCount)
//                 res.status(404);
//             res.send(result);
//         })
//         .catch((err) => {
//             res.send(err);
//         });

// });




// router.put('/', function(req, res){

//});


// let server = app.listen(8080, function(){
//     // this function is not essential :)
//     console.log("My app lissten on port %s", PORT);
// });






