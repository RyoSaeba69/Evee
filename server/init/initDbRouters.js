/**
 * Created by antoine on 11/18/14.
 */

var path = require('path');
var fs = require("fs");


var initDbRouters = function(app, passport){
    var dbRoutersPath = '../routes/dbRouters';

    var normalizedPath = path.join(__dirname, dbRoutersPath);
    fs.readdirSync(normalizedPath).forEach(function(file) {
        require(path.join(dbRoutersPath, file))(app, passport);
    });


};




module.exports = initDbRouters;