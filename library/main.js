
let express = require('express');
let app = express();

let PORT = 8080;
let HOSTNAME = "localhost";

const router = require('express').Router();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

const book_1 = {
    "id" : 0,
    "name" : "harry potter",
    "author" : "jk rolling",
    "publisher" : "choom",
    "year" : "1980",
    "rate" : 3
};
const book_2 = {
    "id" : 1,
    "name" : "harry potter",
    "author" : "jk rolling",
    "publisher" : "choom",
    "year" : "1981",
    "rate" : 1
};

let ALL_BOOKS = [
    book_1,
    book_2

];

Number_Of_All_Books = ALL_BOOKS.length;


router.post('/add-book', function (req, res) {

    new_book = {
        "id" : Number_Of_All_Books,
        "name" : req.body.name,
        "author" : req.body.author,
        "publisher" : req.body.publisher,
        "year" : req.body.year,
        "rate" : req.body.rate,
    };
    ALL_BOOKS.push(new_book);
    console.log("new Book Added successfully. book id : " + Number_Of_All_Books);
    Number_Of_All_Books += 1;
    res.sendStatus(200);

  })
  


app.use(router)

// app.listen(PORT, IP/)

app.get('/get-all-books', function(req, res){
    console.log("get request recieved. I return all books to it :)");
    res.send(ALL_BOOKS)
})

app.get('/get-book', function(req, res){
    console.log("ger request recieved. it request for detail of book " + req.query.key)
    for(let book of ALL_BOOKS)
    {
        if (book["book"]["id"] == req.query.key)
        {
            res.send(book);
            break;
        }
    }
    res.send("This Book Not Found !!");
});





app.delete('/', function(req, res){
    console.log("Delete item");
})




app.put('/', function(req, res){

});


let server = app.listen(8080, function(){
    // this function is not essential :)
    console.log("My app lissten on port %s", PORT);
});






