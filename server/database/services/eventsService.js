/**
 * Created by antoine on 1/20/15.
 */

var Event = require('../models/Event');

var eventsService = {

    findAll: function (callback) {
        Event.find(callback);
    },

    save: function (event, callback) {
        var newEvent = new Event(event);
        newEvent.save(callback);
    },
    
    findById: function (id, callback) {
        Event.findById(id)
            .exec(callback);
    }

};


module.exports = eventsService;