/**
* TypesEvent.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
 *
 * TODO Populate les types d'event !
 * http://stackoverflow.com/questions/23446484/sails-js-populate-nested-associations
*/

module.exports = {

    tableName: "types_event",

    attributes: {
        name: {
            type:'string',
            unique:true,
            required:true
        },
        events:{
            collection:'event',
            via:'type'
        }
    }
};

