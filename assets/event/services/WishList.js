/**
 * Created by quentin on 10/2/15.
 */
angular.module('evee.event')
    .factory('WishList', ['$resource',
        function ($resource) {
            return $resource('/rest/WishList/:WishListId', {WishListId: '@id'}, {
                update: 'PUT'
            });
        }]);