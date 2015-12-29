/**
 * Created by Aurelien on 28/12/2015.
 */
'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;



//Test the connection of the DB
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});



//DB Schema

var userSchema = new Schema ({
    login : {type : String, required : true},
    password : {type : String, required : true}
});

var groupSchema = new Schema ({
    name : {type : String,required :true},
    groupID : {type : Number, required : true}
});

var deviceSchema = new Schema ({
    name : {type : String , required : true},
    deviceID : {type : Number, required : true}
});


//compile modele
module.exports = {
    user: function() {
        return mongoose.model(User,userSchema);
    },
    group: function(){
        return mongoose.model(Group,groupSchema);
    },
    device: function(){
        return mongoose.model(Device,deviceSchema);
    }
};