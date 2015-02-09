/**
 * Created by antoine on 1/24/15.
 */

angular.module('evee.test')
.directive('helloModule', [function () {

        return {
            restrict: 'E',
            templateUrl: 'test/templates/helloModule.html',
            scope: {
                options: '='
            },
            link: function (scope) {
                //console.log('SCOPE OPTIONS ', scope.options);
            }
        }

    }]);