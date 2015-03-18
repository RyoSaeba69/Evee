/**
 * Created by JF on 10/03/2015.
 */

module.exports = {

    tableName:"subject",

    attributes: {

        title: {
            type: 'string',
            defaultsTo: 'My title of subject'
        },
        author:{
            model:'user'
        },
        wall:{
            model:'wall'
        },
        messages: {
            collection:'message',
            via:'subject'
        },
        likes: {
            collection:'like',
            via:'subjectLike'
        }
    }
};