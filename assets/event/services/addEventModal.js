/**
 * Created by antoine on 1/20/15.
 */
angular.module('evee.event')
    .factory('addEventModal', ['$modal',
        function ($modal) {
            return {
                open: function () {
                    return $modal.open({
                        templateUrl: 'event/templates/addEventModal.html',
                        controller: 'addEventCtrl',
                        size: ''
                    });
                }
            };
        }]);