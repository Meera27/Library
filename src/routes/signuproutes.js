const express = require('express');
const signupRouter = express.Router();
const UserData = require('../model/userdata');
function router(nav){
    signupRouter.get('/',function(req,res){
        res.render('signup',{
            email:"",
            error:"",
            nav,
            title:"Sign Up"
        })
    });
    signupRouter.post('/auth',function(req,res){
       var fname = req.body.fname;
        var lname = req.body.lname;
         var phone = req.body.phone;
         var email = req.body.email;
         var password = req.body.password;

         UserData.findOne({email:email},function(err,user){
             if(user){
                res.render('signup',{
                    email:email,
                    error:"is already associated with another account.",
                    nav,
                    title:"Sign Up"
                })

             }
             else if(err){
                 console.log(err);
             }
             else if(!user){
                const newuser = {fname,lname,phone,email,password};
                console.log(newuser);
                const addnew= UserData.create(newuser);
                return res.status(200).redirect('/home')
             }
         })
    
        });
    return signupRouter;
}
module.exports = router;