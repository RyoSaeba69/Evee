/**
 * Created by Jean-François on 02/02/2015.
 */
angular.module('evee.event')
    .factory('TypeEvent', ['$resource',
        function ($resource) {
            return $resource('/rest/typesevent/:typeEventId', {typeEventId: '@id'}, {
                update: 'PUT',
                query: {method: 'GET', isArray:true}
            });
        }]);