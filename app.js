const express = require('express');
const app = new express();
const port  = process.env.PORT || 2000;
const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    }
];

const booksRouter = require('./src/routes/bookroutes')(nav);

    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views',__dirname+'/src/views');
    app.use('/books', booksRouter)
    app.get('/',function(req,res){
    res.render("index",
    {   nav,
        title:'Library'
    }); 
});

app.listen(port,function(){
    console.log("Ready at "+port);
});

 