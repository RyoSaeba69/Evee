/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

// Les sails models sont en global hehey !
//var TypesEvent = require('../api/models/TypesEvent.js');
//var Module = require('../api/models/Module.js');

var Q = require('q');

module.exports.bootstrap = function (cb) {

    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

    sails.services.passport.loadStrategies();

    var listeTypeEvent = [{name: 'Anniversaire'}, {name: 'Crémaillère'}, {name: 'Mariage'}];
    var listeModule = [{name: 'Liste de souhait', collectionName: 'wishlist', directiveName: 'wish-list'}, {name: 'Sondage'}, {name: 'Chat'}, {name: 'Annonces'}, {name: 'Mur'}];

    var tasksPromises = [];

    listeTypeEvent.forEach(function (oneTypeEvent) {
        tasksPromises.push(TypesEvent.findOrCreate(oneTypeEvent, oneTypeEvent));
    });

    listeModule.forEach(function (oneModule) {
        tasksPromises.push(Module.findOrCreate(oneModule, oneModule));
    });

    // Populate les modules par défaut de chaque type d'événement
    Q.all(tasksPromises).then(function () {

        TypesEvent.find({}).exec(function (err, allType) {
            allType.forEach(function (oneType) {

                //console.log("test populate ::: TypeEvent name : "+oneType.name);
                switch (oneType.name) {
                    case 'Anniversaire':
                        Module.findOne({name: 'Liste de souhait'}).then(function (module) {
                            oneType.modules_defaults.add(module.id);
                            oneType.save(console.log);
                        }).catch(function (err) {

                        });
                        Module.findOne({name: 'Mur'}).then(function (module) {
                            oneType.modules_defaults.add(module.id);
                            oneType.save(console.log);
                        }).catch(function (err) {

                        });
                        break;
                    case 'Crémaillère':
                        Module.findOne({name: 'Liste de souhait'}).then(function (module) {
                            oneType.modules_defaults.add(module.id);
                            oneType.save(console.log);
                        }).catch(function (err) {

                        });
                        break;
                    case 'Mariage':
                        Module.findOne({name: 'Liste de souhait'}).then(function (module) {
                            oneType.modules_defaults.add(module.id);
                            oneType.save(console.log);
                        }).catch(function (err) {

                        });
                        Module.findOne({name: 'Annonces'}).then(function (module) {
                            oneType.modules_defaults.add(module.id);
                            oneType.save(console.log);
                        }).catch(function (err) {

                        });
                        break;
                }
            });
        });

    });

    cb();
};
