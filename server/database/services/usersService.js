/**
 * Created by antoine on 11/18/14.
 */

var User = require('../models/User');

var usersService = {
    
    findAll: function (callback) {
        User.find(callback);
    }
    
};


module.exports = usersService;