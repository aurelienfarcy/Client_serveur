/**
 * Created by Aurelien on 28/12/2015.
 */
'use strict';


var express = require('express');
var router = express.Router();
var db = require('../../model/db_Interface.js');


/* Register new account */
router.delete('/', function (req, res) {

    var user_name = req.body.user;
    var password = req.body.password;
    console.log("User name = " + user_name + ", password is " + password);
    db.removeUser(user_name, password);
    console.log("base de donne Sucess");
});
module.exports = router;