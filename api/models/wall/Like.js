/**
 * Created by JF on 10/03/2015.
 */

module.exports = {

    tableName:"like",

    attributes: {

        author:{
            model:'user'
        },
        subjectLike:{
            model:'subject'
        },
        messageLike: {
            model:'message'
        }
    }
};