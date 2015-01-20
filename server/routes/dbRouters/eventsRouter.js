/**
 * Created by antoine on 1/20/15.
 */


var express = require('express');
var usersService = require('../../database/services/eventsService');
var initUserRouter = function (app, passport) {

    var eventsRouter = express.Router();

eventsRouter.get('/findAll', function(req, res){
        usersService.findAll(function(err, events){
            if(err){
                res.send(err);
            } else {
                res.json(events);
            }
        });
    });

    eventsRouter.post('/save', function (req, res) {
        eventsService.save(req.body.data, function (err, newEvent) {
            if(err){
                res.send(err);
            } else {
                res.json(newEvent);
            }
        });
    });

    app.use('/events', eventsRouter);

};

module.exports = initUserRouter;