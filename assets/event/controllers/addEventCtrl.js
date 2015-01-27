/**
 * Created by antoine on 1/20/15.
 */

angular.module('evee.event').
    controller('addEventCtrl', ['$scope', '$modalInstance',
        function ($scope, $modalInstance) {


            $scope.event = {};

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };

            $scope.createNewEvent = function () {
                if($scope.event.title) {
                    $modalInstance.close($scope.event);
                }
            };

        }]);