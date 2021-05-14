const express = require('express');
const UserData = require('../model/userdata');
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
            if(err){
                console.log(err);
                return res.status(500).send();
            }
           if(!user){
               return res.status(404).send();
           }
           return res.status(200).send();
        })
        res.redirect('/home');
      });
    return loginRouter;
}

module.exports = router;