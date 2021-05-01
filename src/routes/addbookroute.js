const express = require('express');
const addbooksRouter = express.Router();
function router(){
    addbooksRouter.get('/',function(req,res){
        res.render("addbooks",);
    });
    return addbooksRouter;
}
module.exports = router;