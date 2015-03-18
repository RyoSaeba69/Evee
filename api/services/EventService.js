/**
 * Created by antoine on 2/12/15.
 */

/*
 moduleInfo: {
 type,
 id
 }
 */
module.exports = {

    findEventWithModules: function (eventId, callback) {

        Event.findOne({id: eventId}).exec(function (event) {

            event.modules = [];

            event.moduleInfo.forEach(function (moduleInfo) {

                var currentModel = sails.models[moduleInfo.type.toLowerCase()];

                currentModel.findOne({id: moduleInfo.id}).exec(function (foundModule) {
                   event.modules.push(foundModule);
                });


            });


        });


    }

}