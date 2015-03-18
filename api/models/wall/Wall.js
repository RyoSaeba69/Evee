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
        moduleInfo:{
            model: 'module'
        },
        subjects:{
            collection:'subject',
            via:'wall'
        }
    }
};
