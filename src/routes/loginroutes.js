const express = require('express');
const UserData = require('../model/userdata');
const bodyParser = require('body-parser');
const { body } = require('express-validator');
const loginRouter = express.Router();


function router(nav){
    loginRouter.use(bodyParser.urlencoded({extended:true}));
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
                //res.send("Wrong");
            }
           if(!user){
               return res.status(404).send();
               return res.send("Wrong");
                
           }
           return res.status(200).send();
        })

        //     if(user.password == password && user.email==email){
        //         res.rendirect('/home');
        //     }
        //     else{
        //         res.send("Wrong");
        //     }
        // });

        res.redirect('/home');
      });
    return loginRouter;
}

module.exports = router;