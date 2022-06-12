


const Book = require('../models/book');


exports.get_add_book =   async function (req, res) {
    console.log("post request to /add-book");
    let last_index = null;
    let last_book = await Book.find().sort({_id:-1}).limit(1);
    if (!last_book.length)
        last_index = 0;
    else
        last_index = last_book[0].id;

    const new_book =new Book({
        id :  last_index + 1,
        title : req.body.name,
        author : req.body.author,
        publisher : req.body.publisher,
        year : req.body.year,
        rate : req.body.rate,
    });
    //ALL_BOOKS.push(new_book);
    //Number_Of_All_Books += 1;
    new_book.save()
        .then((result) => {
            console.log("new Book Added successfully. book id : " + 0);
            res.send(result);
        })
        .catch((err) =>{
            console.log(err);
        })

  }


exports.get_all_books = function(req, res){
    console.log("get request to /get-all-books");
    Book.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        })
    
}

exports.get_book = function(req, res){
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

}


exports.delete_book = function(req, res){
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

}




