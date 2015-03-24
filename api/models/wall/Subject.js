/**
 * Created by JF on 10/03/2015.
 */

module.exports = {

    tableName:"subject",

    attributes: {

        principalMessage: {
            type: 'string',
            required: true
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