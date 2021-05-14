const express = require('express');
const signupRouter = express.Router();
const UserData = require('../model/userdata');
function router(nav){
    signupRouter.get('/',function(req,res){
        res.render('signup',{
            nav,
            title:"Sign Up"
        })
    });
    signupRouter.post('/auth',function(req,res){
    
       var fname = req.body.fname;
        var lname = req.body.lname;
         var uname = req.body.uname;
         var phone = req.body.phone;
         var email = req.body.email;
         var password = req.body.password;
        
        var newuser = new UserData();
        newuser.fname = fname;
        newuser.lname = lname;
        newuser.uname = uname;
        newuser.phone = phone;
        newuser.email = email;
        newuser.password = password;
        // UserData.findOne({uname:uname},function(err,user){
        //     if(user){
        //         
        //     }
        // });
        newuser.save(function(err,userdata){
            if(err){
                console.log(err);
                return res.status(500).send();
            }
            
            return res.status(200).send();
        });
        res.redirect('/home');
    });
    return signupRouter;
}
module.exports = router;
