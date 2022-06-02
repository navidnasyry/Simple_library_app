
let express = require('express');
let app = express();

let PORT = 8080;
let HOSTNAME = "localhost";

const router = require('express').Router();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

const BOOk = {
    "id" : 0,
    "name" : "harry potter",
    "author" : "jk rolling",
    "publishers" : "choom",
    "yearOfPublish" : "1980",
    "rate" : 3
}
const BOOk_1 = {
    "id" : 1,
    "name" : "harry potter",
    "author" : "jk rolling",
    "publishers" : "choom",
    "yearOfPublish" : "1980",
    "rate" : 3
}

let ALL_BOOKS = [
    {
        "book" : BOOk,
        "isReserved" : false,
        "whoReserved" : null,
        "numberOfExist" : 10
    },
    {
        "book" : BOOk_1,
        "isReserved" : false,
        "whoReserved" : null,
        "numberOfExist" : 10
    },
]

router.route("/test")
    .post((req,res) => {
            console.log(req);
        console.log("+++++++++++++");
        if (req.body)
            console.log(req.body);
        else 
            res.send("ERROR !!!");
    })
// router.post('/test', function (req, res) {
//     console.log(req);
//     res.send(req.body);
//   })
  


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


app.post('/add-book', function(req, res){
    if (req.body)
    {
        console.log(req.body);
        res.send(req.body);
        
    }
    else 
        res.send("ERROR !!!");

})



app.delete('/', function(req, res){
    console.log("Delete item");
})




app.put('/', function(req, res){``

});


let server = app.listen(8080, function(){
    // this function is not essential :)
    console.log("My app lissten on port %s", PORT);
});






