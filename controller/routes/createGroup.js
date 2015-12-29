/**
 * Created by Aurelien on 28/12/2015.
 */
'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('createGroup');
});
module.exports = router;