/**
* Module.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    tableName:"module",

    attributes: {
        name: {
            type:'string',
            unique:true,
            required:true
        },
        owners:{
            collection:'typesEvent',
            via:'modules'
        }
    }
};

