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
                    options: '='
                },
                link: function (scope, element) {

                    console.log('OPTIONS ', scope.options);
                    var dirToCompile = '<'+scope.directiveName+' options="options">'
                        +'</'+scope.directiveName+'>';

                    element.html(dirToCompile);

                    // directive compiled with options as parameters
                    $compile(element.contents())(scope);

                }
            };
        }]);