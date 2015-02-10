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
        modules:'array',
        users: 'array',
        admins: 'array',

        type:{
            model:'typesEvent'
        }
    }

};

