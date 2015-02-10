/**
 * Created by quentin on 20/01/15.
 */

angular.module('evee.event')
    .directive('wishList', ['WishList',
        function (WishList) {
            return {
                restrict: 'E',
                scope: {
                    WishListId: '='
                },
                templateUrl: 'event/templates/wishList.html',
                link: function (scope) {
                    scope.WishList = WishList.get({event: scope.eventId}, function () {
                        console.log('WishList fetched ! :)');
                    });
                }
            };
        }]);
