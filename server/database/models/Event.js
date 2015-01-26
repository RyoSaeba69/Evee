/**
 * Created by antoine on 1/20/15.
 */

/**
 * Created by antoine on 11/18/14.
 */

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;

var Schema = mongoose.Schema;

var eventSchema = new Schema({
    title: String,
    description: String,
    creationDate: String,
    admins: [Schema.Types.ObjectId],
    users: [Schema.Types.ObjectId],
    type: Schema.Types.ObjectId,
    modules: [Schema.Types.Mixed],
    public: Boolean
});

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;