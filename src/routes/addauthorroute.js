const express = require('express');
const addauthorsRouter = express.Router();
function router(){
    addauthorsRouter.get('/',function(req,res){
        res.render("addauthors",);
    });
    return addauthorsRouter;
}
module.exports = router;