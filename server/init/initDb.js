/**
 * Created by antoine on 11/18/14.
 */

var mongoose = require('mongoose');
var dbConfigs = require('./../database/dbConfigs');

var initDb = function(){

    mongoose.connect(dbConfigs.connectionString);

    var eveedDb = mongoose.connection;

    eveedDb.once('open', function () {
        console.log('Connected to mongoDB !!!');
    });

    eveedDb.on('error', console.error.bind(console, 'connection mongodb error:'));



};



module.exports = initDb;