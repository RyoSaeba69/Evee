/**
* Event.js
*
* @description :: Model des événements de l'application
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"events",

    attributes: {
        title: 'string',
        description: 'string',
        users: 'array',
        admins: 'array',

        modulesInfo: {
          type: 'array'
        },

        type:{
            model:'typesEvent'
        }
    },

    findEventWithModules: function (eventId, callback) {
        Event.findOne({id: eventId}).exec(function (err, event)
        {
            var moduleFetched = 0;
            event.modules = [];
            if(event.moduleInfo) {
                event.moduleInfo.forEach(function (moduleInfo) {
                    var currentModel = sails.models[moduleInfo.type.toLowerCase()];

                    if (currentModel) {
                        currentModel.findModule(moduleInfo.id, function (foundModule) {
                            event.modules.push(foundModule);
                            console.log('MODMOD ', foundModule);
                            moduleFetched++;
                            if (moduleFetched === event.moduleInfo.length) {
                                callback(event);
                            }
                        });
                    } else {
                        moduleFetched++;
                        if (moduleFetched === event.moduleInfo.length) {
                            callback(event);
                        }
                    }


                });
            } else {
                callback(event);
            }
        });
    }
};

