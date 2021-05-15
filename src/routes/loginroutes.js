const express = require('express');
const UserData = require('../model/userdata');
// const bodyParser = require('body-parser');
// const { body } = require('express-validator');
const loginRouter = express.Router();


function router(nav){
    loginRouter.get('/',function(req,res){
        res.render('login',{
            nav,
            title:"Login"
        })
    });     
    
    loginRouter.post('/valid',function(req,res){
        var email = req.body.email;
        var password = req.body.password;
        UserData.findOne({email:email,password:password},function(err,user){
            if(user){
                res.redirect('/home');
                console.log(user);
            }
            else {
                if(!user){
                    res.redirect('/signup');
                }
                else{
                    console.log(err);
                }
            }
        });

        res.redirect('/home');
      });
    return loginRouter;
}

module.exports = router;