/**
 * Created by antoine on 3/3/15.
 */


angular.module('evee.event')
    .controller('addModuleModalCtrl', ['$scope', '$modalInstance', 'Module',
        function ($scope, $modalInstance, Module) {

            $scope.modalVar = {};

            $scope.modalVar.moduleToAdd = {};

            $scope.modalVar.allModules = Module.query({}, function () {
               console.log('ALL MODULE ', $scope.modalVar.allModules);
            });

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };

            $scope.selectModule = function(module){
                if(module){
                    $scope.modalVar.moduleToAdd.moduleInfo = module;
                }
            }

            $scope.ok = function (module) {
                if(!module){
                    return;
                }

                $modalInstance.close(module)
            };

    }]);