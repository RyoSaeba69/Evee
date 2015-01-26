/**
 * Created by antoine on 1/20/15.
 */


var express = require('express');
var eventsService = require('../../database/services/eventsService');
var initEventRouter = function (app, passport) {

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

    eventsRouter.post('/findEvent', function (req, res) {
        eventsService.findById(req.body.data.eventId, function (err, foundEvent) {
            if(err){
                res.send(err);
            } else {
                res.json(foundEvent);
            }
        });
    });

    app.use('/events', eventsRouter);

};

module.exports = initEventRouter;