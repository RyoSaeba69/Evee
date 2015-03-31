/**
 * Created by JF on 10/03/2015.
 */
var Q = require('q');
var Promise = require('bluebird');

module.exports = {

    tableName: "subject",

    attributes: {

        principalMessage: {
            type: 'string',
            required: true
        },
        author: {
            model: 'user'
        },
        wall: {
            model: 'wall'
        },
        messages: {
            collection: 'message',
            via: 'subject'
        },
        likes: {
            collection: 'like',
            via: 'subjectLike'
        }
    },

    findModule: function (subjectId) {
        return new Promise(function (resolve) {
            Subject.findSubject(subjectId).then(function (subject) {
                console.log(subject);
                if (subject) {
                    var tabPromises = [];
                    /*subject.author = User.findOne({id: subject.author});*/
                    console.log("Test AUTHOR currentSubject : ", subject.author);
                    subject.messages.forEach(function (currentMessage, messageIndex) {
                        var promise = Message.findOne({id: currentMessage.id}).populateAll();
                        promise.exec(function (err, findMessage) {
                            if (err) {
                                sails.log.error(err);
                            } else {
                                subject.messages[messageIndex] = findMessage;
                                var promise2 = User.findOne({id: findMessage.author.id}).populateAll();
                                promise2.exec(function (err, findUser) {
                                    if (err) {
                                        sails.log.error(err);
                                    } else {
                                        subject.messages[messageIndex].author = findUser;
                                    }
                                })
                                console.log('AUTHOR currentMessage : ', subject.messages[messageIndex].author);
                            }
                        });
                        tabPromises.push(promise);
                    });

                    Q.all(tabPromises).then(function () {
                        resolve(subject);
                    });
                }
            });
        });
    },

    findSubject: function (subjectId) {
        return new Promise(function (resolve) {
            Subject.findOne({id: subjectId}).populateAll().exec(function (err, subject) {
                if(err) {
                    sails.log.error(err);
                } else {
                    User.findOne({id: subject.author.id}).populateAll().exec(function (err, user) {
                        if (err) {
                            sails.log.error(err);
                        } else {
                            subject.author = user;
                            resolve(subject);
                        }
                    });
                }
            });
        });
    }
};