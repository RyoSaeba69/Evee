/**
 * Created by antoine on 11/18/14.
 */

var express = require('express');
var usersService = require('../../database/services/usersService');

var initUserRouter = function (app) {

    var usersRouter = express.Router();

    usersRouter.get('/findAll', usersService.findAll);

    app.use('/users', usersRouter);

};


module.exports = initUserRouter;