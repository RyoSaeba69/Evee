/**
 * Created by Jean-François on 17/11/2014.
 */
angular.module('evee.user')
    .factory('modalConnectionService', ["$modal", function ($modal) {
        return {
            open: function () {
                return $modal.open({
                    templateUrl: "user/templates/modalConnection.html",
                    controller: "modalConnection",
                    size: ''
                });
            }
        };
    }]);
