/**
 * Created by antoine on 11/18/14.
 */

var express = require('express');
var usersService = require('../../database/services/usersService');

var initUserRouter = function (app, passport) {

    var usersRouter = express.Router();

    //usersRouter.post('/login', function(req, res){
    //   console.log("USERS ==> ", req.body.data);
    //});

    usersRouter.post('/login', passport.authenticate('local-login', {
        successRedirect: '/users/successlogin',
        failureRedirect: '/users/failurelogin',
        failureFlash: false
    }));

    usersRouter.get('/successlogin', function (req, res) {
        res.json(req.isAuthenticated ? req.user : false);
    });

    usersRouter.get('/failurelogin', function (req, res) {
        res.json({isAuthenticated: false});
    });


    usersRouter.get('/findAll', function(req, res){
        usersService.findAll(function(err, users){
            if(err){
                res.send(err);
            } else {
                res.json(users);
            }
        });
    });

    usersRouter.post('/save', function (req, res) {
        usersService.save(req.body.data, function (err, newUser) {
           if(err){
               res.send(err);
           } else {
               res.json({success: true});
           }
        });
    });

    app.use('/users', usersRouter);

};

module.exports = initUserRouter;