const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/bookdata');
function router(nav){
    adminRouter.get('/',function(req,res){
        res.render("addbooks",{
            nav,
            title:"Add Book"
        });
    });

    adminRouter.post('/add',function(req,res){
    //     var item={
    //       title : req.query.title,
    //       genre : req.query.genre,
    //       author:req.query.Author,
    //       image : req.query.image,
    //       desc : req.query.desc
    //     }
    //   var book = Bookdata(item);
    //   book.save();//saving to db
    //   res.redirect('/books');
    // res.send("Added")


    var item={
              title : req.body.title,
              genre : req.body.genre,
              author:req.body.Author,
              image : req.body.image,
              desc : req.body.desc
            }
          var book = Bookdata(item);
          book.save();//saving to db
          res.redirect('/books');
    
     });
     
    return adminRouter;
}
module.exports = router;