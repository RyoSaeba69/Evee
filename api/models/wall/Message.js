/**
 * Created by JF on 10/03/2015.
 */

module.exports = {

    tableName:"message",

    attributes: {

        content:{
            type: 'string',
            defaultsTo: 'My content of message'
        },
        author:{
            model:'user'
        },
        subject:{
            model:'subject'
        },
        likes: {
            collection:'like',
            via:'messageLike'
        }
    }
};