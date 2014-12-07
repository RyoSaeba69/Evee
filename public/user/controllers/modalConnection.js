/**
 * Created by Jean-François on 17/11/2014.
 */
angular.module('evee.user')
    .controller('modalConnection', ["$scope", "$modal", "$modalInstance", 'eveeHttp', 'authService',
        function ($scope, $modal, $modalInstance, eveeHttp, authService) {

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

            $scope.connect = function () {

                eveeHttp.postForm('users/login', $scope.user)
                    .success(function(data, statut, headers, config){

                        eveeHttp.get('users/successlogin')
                            .success(function(data, statut, headers, config){
                                if(data) {
                                    authService.setUser(data);
                                }
                            });
                    });

                $modalInstance.dismiss('cancel');
                console.log("Test username : " + $scope.user.name + " test mdp : " + $scope.user.password);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]);