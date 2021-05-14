const express = require('express');
const loginRouter = express.Router();

// const bodyParser = require('body-parser');
// const { check , validationResult } =  require('express-validator');



function router(nav){
    loginRouter.get('/',function(req,res){
        res.render('login',{
            nav,
            title:"Login"
        })
    });       
    return loginRouter;
}
module.exports = router;