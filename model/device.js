/**
 * Created by Aurelien on 31/12/2015.
 */

var db = require ('./dB_Schema.js');
var DeviceDB= db.device();

var device = {
    registerDevice : function(name_device){
        var device = new DeviceDB({
            name_device : name_device
        });
        device.save (function (err) {
            if (err) { throw err; }
            console.log('Sucess device created!');
        })
    }
};

module.exports = device;