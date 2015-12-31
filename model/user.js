/**
 * Created by Aurelien on 28/12/2015.
 */
'use strict';

var db = require ('./dB_Schema.js');
var UserDB= db.user();

var user = {
    registerUser : function(login, password){
        var user = new UserDB({
            login : login,
            password : password
        });
        user.save (function (err) {
            if (err) { throw err; }
            console.log('Sucess user registered !');
        })
    },

    removeUser: function(email, done) {
        UserDB.findOneAndRemove({login : login, password : password}, function(err) {
            done(err);
        });
    }
};


module.exports = user;
