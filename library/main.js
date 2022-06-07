
const { ALL } = require('dns');
let express = require('express');
let mongoose = require('mongoose');
//let MongoClient = require('mongodb').MongoClient;
const router = require('express').Router();
const Book = require('./models/book')

let app = express();
let PORT = 8080;
let HOSTNAME = "localhost";


// MongoClient.connect(db_rul, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, (err, client) => {
//     if (err) {
//         return console.log(err);
//     }

//     // Specify database you want to access
//     const db = client.db('Library');

//     console.log(`MongoDB Connected: ${db_rul}`);
// });



app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));
app.use(router)



Number_Of_All_Books = Book.find().length;
console.log(Number_Of_All_Books);


const db_url = "mongodb://127.0.0.1:27017";
mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log(`MongoDB Connected: ${db_url}\nListening on port ${PORT}`)
        app.listen(PORT);
    })
    .catch((err) => console.log(err));





router.post('/add-book', function (req, res) {
    console.log("post request to /add-book");
    const new_book =new Book({
        id : req.body.id,
        title : req.body.name,
        author : req.body.author,
        publisher : req.body.publisher,
        year : req.body.year,
        rate : req.body.rate,
    });
    //ALL_BOOKS.push(new_book);
    Number_Of_All_Books += 1;
    new_book.save()
        .then((result) => {
            console.log("new Book Added successfully. book id : " + Number_Of_All_Books);
            res.send(result);
        })
        .catch((err) =>{
            console.log(err);
        })

  });
  

// app.listen(PORT, IP/)

router.get('/get-all-books', function(req, res){
    console.log("get request to /get-all-books");
    Book.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        })
    
});

router.get('/get-book', function(req, res){
    console.log("get request to /get-book");
    Book.find({id:req.query.id})
        .then((result) =>{
            if(result.length)
                res.send(result);
            else{
                res.status(404);
                res.send("Book Not Found :(");
            }
        })
        .catch((err) => {
            res.send("Book Not Found :)");
        })

});



router.delete('/delete-book', function(req, res){
    console.log("delete request to /delete-book");
    all_books = Book.deleteOne({id:req.query.id})
        .then((result) => {
            if(!result.deletedCount)
                res.status(404);
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });

});




router.put('/', function(req, res){

});


// let server = app.listen(8080, function(){
//     // this function is not essential :)
//     console.log("My app lissten on port %s", PORT);
// });






