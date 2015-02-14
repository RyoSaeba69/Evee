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

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

    sails.services.passport.loadStrategies();

    var listeTypeEvent = [{name:'Anniversaire'}, {name:'Crémaillère'}, {name:'Mariage'}];
    var listeModule = [{name:'Liste de souhait'}, {name:'Sondage'}, {name:'Chat'}, {name:'Annonces'}, {name:'Mur'}];

    var errorConsole = function(err, record) {
        //console.log("Err: "+err);
        //console.log("Record: "+record);
    };

    listeTypeEvent.forEach(function(oneTypeEvent) {
        TypesEvent.findOrCreate(oneTypeEvent, oneTypeEvent).exec(errorConsole);
    });

    listeModule.forEach(function(oneModule) {
        Module.findOrCreate(oneModule, oneModule).exec(errorConsole);
    });

    // Populate les modules par défaut de chaque type d'événement
    TypesEvent.find({}).exec(function (err,allType) {
        allType.forEach(function (oneType){

            //console.log("test populate ::: TypeEvent name : "+oneType.name);
            switch(oneType.name) {
                case 'Anniversaire':
                    Module.findOne({name:'Liste de souhait'}).then(function(module){
                        oneType.modules_defaults.add(module.id);
                        oneType.save(console.log);
                    });
                    Module.findOne({name:'Mur'}).then(function(module){
                        oneType.modules_defaults.add(module.id);
                        oneType.save(console.log);
                    });
                    break;
                case 'Crémaillère':
                    Module.findOne({name:'Liste de souhait'}).then(function(module){
                        oneType.modules_defaults.add(module.id);
                        oneType.save(console.log);
                    });
                    break;
                case 'Mariage':
                    Module.findOne({name:'Liste de souhait'}).then(function(module){
                        oneType.modules_defaults.add(module.id);
                        oneType.save(console.log);
                    });
                    Module.findOne({name:'Annonces'}).then(function(module){
                        oneType.modules_defaults.add(module.id);
                        oneType.save(console.log);
                    });
                    break;
            }
        });
    });

    cb();
};
