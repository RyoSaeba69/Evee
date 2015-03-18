/**
 * Created by antoine on 2/12/15.
 */

angular.module('evee.event')
    .factory('Module', ['$resource', function ($resource) {
        return $resource('/rest/module/:moduleId', {eventId: '@id'}, {
            update: 'PUT'
        });
    }]);
