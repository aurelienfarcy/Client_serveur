/**
 * Created by Aurelien on 28/12/2015.
 */
'use strict';

var db = require ('./dB_Interface.js');


var user = {
    registerUser : function(login, password){
        var user = new UserDB({
            login : login,
            password : password
        });
        user.save (function (err,doc ) {
            done(err,doc);
        })
    }
};

module.exports = user;
