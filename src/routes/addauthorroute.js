const express = require('express');
const addauthorsRouter = express.Router();
const AuthorData = require('../model/authordata');
function router(nav){
    addauthorsRouter.get('/',function(req,res){
        res.render("addauthors",{
            nav,
            title:"Add Author"
        });
    });
    addauthorsRouter.post('/add',function(req,res){
        // res.send("Hi added");
        var item={
            name:req.body.name,
            title:req.body.title,
            image:req.body.image,
            desc:req.body.desc
        }
        var authors = AuthorData(item);
        authors.save();
        res.redirect('/authors');
    });
    return addauthorsRouter;
}
module.exports = router;