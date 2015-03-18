/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    findEventWithModules: function(req, res){
        var eventId = req.param('id');
        Event.findEventWithModules(eventId, function (event) {
           res.send(event);
        });
    },
    addNewModule: function (req, res) {
        var module = req.body.data.module;
        var eventId = req.body.data.eventId;
        var collectionName = module.moduleInfo.collectionName;

        var currentModel = sails.models[collectionName.toLowerCase()];

        if(currentModel){
            currentModel.create(module).exec(function(err, module){
                console.log('TOTOOTOTO', module);
                Event.findOne({id: eventId}).exec(function(err, event){
                    if(!event.moduleInfo){
                        event.moduleInfo = [];
                    }
                    event.moduleInfo.push({
                       id: module.id,
                        type: collectionName
                    });
                   event.save(function(){
                       res.send(module);
                   });

                });

            });
        }

    }
};

