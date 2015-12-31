/**
 * Created by Aurelien on 28/12/2015.
 */
'use strict';

var express = require('express');
var router = express.Router();
var db = require('../../model/db_Interface.js');

/* Add device */
router.post('/', function (req, res) {
    var device = req.body.device;
    console.log("Group name = " + device);
    db.registerDevice(device);
    console.log("base de donne Sucess");
});

module.exports = router;