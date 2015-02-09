/**
 * Created by antoine on 11/22/14.
 */

angular.module('evee')
    .directive('eveeLoader', [function () {

        return {

            restrict: 'E',
            templateUrl: 'evee/templates/eveeLoader.html',
            link: function(){
            }
        };

    }]);