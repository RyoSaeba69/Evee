/**
 * Created by antoine on 2/1/15.
 */
angular.module('evee.event')
    .factory('Event', ['$resource',
        function ($resource) {
           return $resource('/rest/event/:eventId', {eventId: '@id'}, {
               update: 'PUT'
           });
        }]);