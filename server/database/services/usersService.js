/**
 * Created by antoine on 11/18/14.
 */

var User = require('../models/User');

var usersService = {
    
    findAll: function (req, res) {
        User.find(function(err, users){
            if(err){
                res.send(err)
            } else {
                res.json(users);
            }
        });
    }
    
};


module.exports = usersService;