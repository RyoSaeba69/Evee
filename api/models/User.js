var User = {
    // Enforce model schema in the case of schemaless databases
    schema: true,

    tableName: 'users',

    attributes: {
        username: {type: 'string', unique: true},
        email: {type: 'email', unique: true},
        passports: {collection: 'Passport', via: 'user'},
        wallSubjects: {collection:'subject', via:'author'},
        wallSubjectMessages: {collection:'message', via:'author'},
        likeStatus: {collection:'like', via:'author'}
    }
};

module.exports = User;
