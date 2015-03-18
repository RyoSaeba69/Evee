/**
 * Created by JF on 10/03/2015.
 */

angular.module('evee.event')
    .factory('Wall', ['$resource',
        function ($resource) {
            return $resource('/rest/event/:eventId/wall', {eventId: '@id'}, {
                update: 'PUT'
            });
        }]);