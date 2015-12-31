/**
 * Created by Aurelien on 28/12/2015.
 */
'use strict';

var express = require('express');
var router = express.Router();
var db = require('../../model/db_Interface.js');


/* Register new group */
router.post('/', function (req, res) {
    var group = req.body.group;

    console.log("Group name = " + group);
    db.registerGroup(group);
    console.log("base de donne Sucess");
});
module.exports = router;