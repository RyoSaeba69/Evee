/**
 * Created by antoine on 12/7/14.
 */
angular.module('evee.user')
    .directive('loginMenuLink', ['modalConnectionService', 'AUTH_EVENT', 'authService',
        function (modalConnectionService, AUTH_EVENT, authService) {
            return {
                restrict: 'E',
                templateUrl: 'user/templates/loginMenuLink.html',
                replace: true,
                link: function (scope) {


                    scope.isLogged = authService.isLogged();


                    scope.showConnectionModal = function () {
                        modalConnectionService.open();
                    };

                    scope.logout = function () {
                        authService.logout();
                    };

                    scope.$on(AUTH_EVENT.login, function () {
                        scope.isLogged = true;
                    });

                    scope.$on(AUTH_EVENT.logout, function () {
                        scope.isLogged = false;
                    });

                }

            }
        }]);