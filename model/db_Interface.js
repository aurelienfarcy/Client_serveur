/**
 * Created by Aurelien on 28/12/2015.
 */
'use strict'

var dbUser =  require('./user.js');

var db = {
    registerUser : dbUser.registerUser
};

module.exports = db;