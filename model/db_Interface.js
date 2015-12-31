/**
 * Created by Aurelien on 28/12/2015.
 */
'use strict'

var dbUser =  require('./user.js');
var dbGroup = require('./group.js');
var dbDevice = require('./device.js');

var db = {
    registerUser : dbUser.registerUser,
    removeUser :   dbUser.removeUser,

    registerGroup :dbGroup.registerGroup,

    registerDevice :dbDevice.registerDevice
};

module.exports = db;