/**
 * Created by Jean-François on 17/11/2014.
 */
angular.module('evee.user')
    .controller('modalConnection', ["$scope", "$modal", "$modalInstance", "modalRegisterService", 'eveeHttp', 'authService',
        function ($scope, $modal, $modalInstance, modalRegisterService, eveeHttp, authService) {

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

                //eveeHttp.postForm('/auth/local', $scope.user)
                //    .success(function(data, statut, headers, config){
                //        authService.setUser(data);
                //        console.log('USER ', data);
                //    });

                authService.login($scope.user, function (user) {
                    if(user) {
                        $modalInstance.dismiss('close');
                    }
                });

                //TODO a retirer une fois tests terminer
                //console.log("Test username : " + $scope.user.name + " test mdp : " + $scope.user.password);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };

            $scope.showRegisterForm = function(){
                $modalInstance.dismiss('cancel');
                modalRegisterService.open();
            }

            $scope.pressToConnect = function($event){
                if($event.which == 13) $scope.connect();
            }
        }]);