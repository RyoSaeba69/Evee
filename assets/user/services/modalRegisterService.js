
angular.module('evee.user')
    .factory('modalRegisterService', ["$modal", function ($modal) {
        return {
            open: function () {
                return $modal.open({
                    templateUrl: "user/templates/modalRegister.html",
                    controller: "modalRegister",
                    size: ''
                });
            }
        };
    }]);
