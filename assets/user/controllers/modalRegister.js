
angular.module('evee.user')
    .controller('modalRegister', ["$scope", "$modal", "$modalInstance", 'eveeHttp', 'authService', 'toastr', '$translate',
        function ($scope, $modal, $modalInstance, eveeHttp, authService, toastr, $translate) {

            $scope.open = function (size) {

                var modalInstance = $modal.open({
                    templateUrl: 'modalRegister.html',
                    controller: 'ModalInstanceCtrl',
                    size: size
                });

                modalInstance.result.then(function (selectedItem) {
                    $scope.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };

            $scope.register = function () {

                eveeHttp.postForm('/auth/local/register', $scope.user)
                    .success(function (data, statut) {
                        $modalInstance.dismiss('close');
                        $translate('SUCCESSFULLY_SIGN_UP').then(function (translation) {
                            toastr.success(translation);
                        }, function () {
                            toastr.error('Jesus')
                        });
                    });

            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]);