/**
 * Created by antoine on 11/18/14.
 */

var mongoose = require('mongoose');
var dbConfigs = require('./../database/dbConfigs');

var initDb = function(callback){

    mongoose.connect(dbConfigs.connectionString);

    var eveedDb = mongoose.connection;

    eveedDb.on('error', console.error.bind(console, 'connection mongodb error:'));

    eveedDb.once('open', function () {
        console.log('Connected to DB !!!');
        callback();
    });

};



module.exports = initDb;