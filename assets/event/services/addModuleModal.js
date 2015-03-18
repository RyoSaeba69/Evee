/**
 * Created by antoine on 3/3/15.
 */


angular.module('evee.event')
.factory('addModuleModal', ['$modal', function ($modal) {
        return {
            open: function () {
                return $modal.open({
                   templateUrl: 'event/templates/addModuleModal.html',
                    controller: 'addModuleModalCtrl',
                    size: ''
                });
            }
        };
    }]);