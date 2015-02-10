/**
 * Created by jeremy on 12/02/15.
 */
angular.module('evee.user')
    .directive('registerMenuLink', ['modalConnectionService', 'modalRegisterService', 'AUTH_EVENT', 'authService',
        function (modalConnectionService, modalRegisterService, AUTH_EVENT, authService) {
            return {
                restrict: 'E',
                templateUrl: 'user/templates/registerMenuLink.html',
                replace: true,
                link: function (scope) {


                    scope.isLogged = authService.isLogged();


                    scope.showRegisterModal = function () {
                        modalRegisterService.open();
                    };
                    //
                    //scope.logout = function () {
                    //    authService.logout();
                    //};
                    //
                    //scope.$on(AUTH_EVENT.login, function () {
                    //    scope.isLogged = true;
                    //});
                    //
                    //scope.$on(AUTH_EVENT.logout, function () {
                    //    scope.isLogged = false;
                    //});

                }

            }
        }]);