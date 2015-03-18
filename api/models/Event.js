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

        wishList:{
            model:'wishList'
        },

        wall:{
            model:'wall'
        },

        type:{
            model:'typesEvent'
        }
    }

    //afterCreate: function (savedElement, cb){
    //    console.log("test SavedElement typeEventId: "+savedElement.type)
    //    TypesEvent.findOne({id:savedElement.type})
    //        .populate('events')
    //        .exec(function(err, typeEvent) {
    //            if(err)
    //                console.log("Err afterCreate Event.js : "+err);
    //            else
    //                console.log("typeEvent : " + typeEvent);
    //        });
    //    cb();
    //}

};

