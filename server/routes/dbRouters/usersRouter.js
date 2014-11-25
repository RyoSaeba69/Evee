/**
 * Created by antoine on 11/18/14.
 */

var express = require('express');
var usersService = require('../../database/services/usersService');

var initUserRouter = function (app) {

    var usersRouter = express.Router();

    usersRouter.get('/findAll', function(req, res){
        usersService.findAll(function(err, users){
            if(err){
                res.send(err);
            } else {
                res.json(users);
            }
        });
    });

    app.use('/users', usersRouter);

};


module.exports = initUserRouter;