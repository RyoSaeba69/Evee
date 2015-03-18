/**
 * Created by JF on 10/03/2015.
 */

module.exports = {

    tableName:"wall",

    attributes: {

        title: {
            type: 'string',
            defaultsTo: 'Wall'
        },
        event:{
            model:'event'
        },
        subjects:{
            collection:'subject',
            via:'wall'
        }
    }
};
