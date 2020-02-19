var express = require('express')
var booksRouter = express.Router();
function router(nav)
{

    var books = [
        {
            title:"BOOK1",
            genere:"history",
            author:"Lev",
        },
        {
            title:"BOOK2",
            genere:"geography",
            author:"Levin",
        },
        {
            title:"BOOK3",
            genere:"science",
            author:"Levre",
        },
    ];
    booksRouter.route('/')
    .get((req,res)=>
    {
        res.render('books',{
            nav,
            title:"Books" ,
            books
        });
    });
    booksRouter.route('/:id')
    .get((req,res)=>
    {
        const id= req.params.id;
    
        res.render('book',
        {
            nav,
            title:"Books" , book: books[id]
    
        }
        );
    });
return booksRouter;
}

module.exports = router;