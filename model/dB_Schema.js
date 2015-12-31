/**
 * Created by Aurelien on 28/12/2015.
 */
'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db');
var Schema = mongoose.Schema;

//DB Schema

var userSchema = Schema ({
    login : {type : String, required : true},
    password : {type : String, required : true}
});

var groupSchema = Schema ({
    name : {type : String,required :true}
    // groupID : {}
});

var deviceSchema = Schema ({
    name_device : {type : String , required : true}

    //deviceID : {}
});


//model creation
//var User = mongoose.model('User', userSchema);

//compile modele
module.exports = {
    disconnect: function() {
        mongoose.disconnect();
    },
    user: function() {
        return mongoose.model('User',userSchema);
    },
    group: function(){
        return mongoose.model('Group',groupSchema);
    },
    device: function(){
        return mongoose.model('Device',deviceSchema);
    }
};