/**
 * Created by antoine on 1/24/15.
 */

angular.module('evee.event')
    .directive('dispEvent', ['eveeHttp',
        function (eveeHttp) {
            return {
                restrict: 'E',
                scope: {
                    eventId: '='
                },
                templateUrl: 'event/templates/dispEvent.html',
                link: function (scope) {
                    eveeHttp.post('events/findEvent', {
                        data: {
                            eventId: scope.eventId
                        }
                    }).success(function (foundEvent) {
                       console.log('FOUND EVENT ', foundEvent);
                        scope.event = foundEvent;
                    });
                }
            };
        }]);