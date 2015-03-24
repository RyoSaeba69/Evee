/**
 * Created by antoine on 1/24/15.
 */

angular.module('evee.event')
    .directive('dynamicDirective', ['$compile',
        function ($compile) {
            return {
                restrict: 'E',
                scope: {
                    directiveName: '=',
                    model: '='
                },
                link: function (scope, element) {

                    var dirToCompile = '<'+scope.directiveName+' model="model">'
                        +'</'+scope.directiveName+'>';

                    element.html(dirToCompile);

                    // directive compiled with options as parameters
                    $compile(element.contents())(scope);

                }
            };
        }]);