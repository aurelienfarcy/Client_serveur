/**
 * Created by Aurelien on 28/12/2015.
 */
'use strict';


var express = require('express');
var router = express.Router();

router.post('/',function(req,res){
    res.render("Removepage.jade");
});

module.exports = router;