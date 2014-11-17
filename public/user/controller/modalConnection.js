/**
 * Created by Jean-François on 17/11/2014.
 */
angular.module('evee.user')
    .controller('modalConnection', ["$scope", "$modal", "$modalInstance",
        function ($scope, $modal, $modalInstance) {

            $scope.items = ['item1', 'item2', 'item3'];

            $scope.open = function (size) {

                var modalInstance = $modal.open({
                    templateUrl: 'modalConnection.html',
                    controller: 'ModalInstanceCtrl',
                    size: size
                });

                modalInstance.result.then(function (selectedItem) {
                    $scope.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };

            $scope.ok = function () {
                $modalInstance.dismiss('cancel');
                console.log("Test username : " + $scope.user.name + " test mdp : " + $scope.user.password);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]);