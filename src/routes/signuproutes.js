const express = require('express');
const signupRouter = express.Router();
function router(){
    signupRouter.get('/',function(req,res){
        res.render('signup')
    });
    return signupRouter;
}
module.exports = router;