/**
 * Created by quentin on 20/01/15.
 */

angular.module('evee.event')
    .directive('wishList', ['WishList',
        function (WishList) {
            return {
                restrict: 'E',
                scope: {
                    WishListId: '=',
                    eventId: '='
                },
                templateUrl: 'event/templates/wishList.html',
                link: function (scope) {
                    scope.$watch('eventId', function (eventId) {
                        if(eventId) {
                            scope.WishList = WishList.get({eventId: eventId}, function () {
                                console.log('WishList fetched ! :)');
                            });
                        }
                    });
                }
            };
        }]);
