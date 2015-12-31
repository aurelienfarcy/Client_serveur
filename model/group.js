/**
 * Created by Aurelien on 31/12/2015.
 */


var db = require ('./dB_Schema.js');
var GroupDB= db.group();

var group = {
    registerGroup : function(name){
        var group = new GroupDB({
            name : name
        });
        group.save (function (err) {
            if (err) { throw err; }
            console.log('Sucess group created!');
        })
    }
};

module.exports = group;