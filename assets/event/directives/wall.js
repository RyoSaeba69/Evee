/**
 * Created by JF on 10/03/2015.
 */

angular.module('evee.event')
    .directive('wall', ['Wall',
        function (Wall) {
            return {
                restrict: 'E',
                scope: {
                    WallId: '=',
                    eventId: '='
                },
                templateUrl: 'event/templates/wall.html',
                link: function (scope) {
                    scope.$watch('eventId', function (eventId) {
                        if(eventId) {
                            scope.Wall = Wall.get({eventId: eventId}, function () {
                                console.log('Wall fetched ! :)');
                            });
                        }
                    });
                }
            };
        }]);