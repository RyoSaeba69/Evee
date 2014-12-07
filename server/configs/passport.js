/**
 * Created by antoine on 12/7/14.
 */

// config/passport.js

// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var User = require('../database/models/User');

// expose this function to our app using module.exports
module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'name',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function (req, name, password, done) { // callback with email and password from our form
            User.findOne({'email': name}, function (err, user) {
                // if there are any errors, return the error before anything else
                if (err)
                    return done(err);
                if (!user)
                    return done(null, false/*, req.flash('loginMessage', 'No user found.')*/); // req.flash is the way to set flashdata using connect-flash
                if (!user.comparePassword(password))
                    return done(null, false/*, req.flash('loginMessage', 'Oops! Wrong password.')*/); // create the loginMessage and save it to session as flashdata

                return done(null, user);
            });

        }));
};