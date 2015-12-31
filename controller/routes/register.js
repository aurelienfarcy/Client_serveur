/**
 * Created by Aurelien on 28/12/2015.
 */
// Here Begin of module
'use strict';

var express = require('express');
var router = express.Router();
var db = require('../../model/db_Interface.js');


/* Register new account */
router.post('/', function (req, res) {

    var user_name = req.body.user;
    var password = req.body.password;
    console.log("User name = " + user_name + ", password is " + password);
    db.registerUser(user_name, password);
    console.log("base de donne Sucess");
});

//Here return value of module , same function
module.exports = router;