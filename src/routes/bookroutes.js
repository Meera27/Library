const express = require('express');
const booksRouter = express.Router();
function router(nav){

    var books = [
        {
            title:'Tom & Jerry',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:'tj1.jpg'
        },
        {
            title:'Tom & Jerry Movie',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:'tj2.jpg'
        },
        {
            title:'Tom & Jerry Main',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:'tj3.jpg'
        }
        ]
        booksRouter.get('/',function(req,res){
            res.render("books",{
                nav,
                title:'Library',
                books
            });
        });
        booksRouter.get('/:id',function(req,res){
            const id = req.params.id; 
            res.render("book",{
                nav,
                title:'Library',
                book:books[id]
            });
        });
        return booksRouter;

}

module.exports = router;