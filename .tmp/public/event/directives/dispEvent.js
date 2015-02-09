/**
 * Created by antoine on 1/24/15.
 */

angular.module('evee.event')
    .directive('dispEvent', ['Event',
        function (Event) {
            return {
                restrict: 'E',
                scope: {
                    eventId: '='
                },
                templateUrl: 'event/templates/dispEvent.html',
                link: function (scope) {
                    scope.event = Event.get({eventId: scope.eventId}, function () {
                        console.log('Event fetched ! :)');
                    });
                }
            };
        }]);