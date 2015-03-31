/**
 * Created by JF on 10/03/2015.
 */

var Q = require('q');

module.exports = {

    tableName:"wall",

    attributes: {

        moduleInfo:{
            model: 'module'
        },
        subjects:{
            collection:'subject',
            via:'wall'
        }
    },

    findModule: function (wallId, callback) {
        Wall.findOne({id: wallId}).populateAll().exec(function (err, wall)
        {
            if(wall) {
                var tabPromises = [];
                wall.subjects.forEach(function(currentSubject, subjectIndex) {
                    var promise = Subject.findModule(currentSubject.id);
                        promise.then(function (findSubject){
                        if(err) {
                            sails.log.error(err);
                        } else {
                            wall.subjects[subjectIndex] = findSubject;
                            console.log('AUTHOR currentSubject : ' , wall.subjects[subjectIndex].author);
                        }
                    });
                    tabPromises.push(promise);
                });

                Q.all(tabPromises).then(function () {
                    callback(wall);
                });
            }
        });
    }
};
