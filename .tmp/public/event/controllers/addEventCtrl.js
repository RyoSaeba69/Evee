/**
 * Created by antoine on 1/20/15.
 */

angular.module('evee.event').
    controller('addEventCtrl', ['$scope', '$modalInstance', 'TypeEvent',
        function ($scope, $modalInstance, TypeEvent) {


            $scope.event = {};

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };

            $scope.createNewEvent = function () {
                if($scope.event.title) {
                    $modalInstance.close($scope.event);
                }
            };

            $scope.typesEvent = TypeEvent.query();

        }]);